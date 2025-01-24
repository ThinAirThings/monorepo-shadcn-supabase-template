import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { handleOnboardingRedirect } from './middleware/onboarding-middleware'

export async function middleware(request: NextRequest) {
  // First check auth
  const response = await updateSession(request)
  
  // If the auth middleware redirected, return that response
  if (response.status !== 200) {
    return response
  }

  // Then check onboarding status
  return handleOnboardingRedirect(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}