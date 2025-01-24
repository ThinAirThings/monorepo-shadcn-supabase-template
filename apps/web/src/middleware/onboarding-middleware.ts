import { type NextRequest, NextResponse } from 'next/server';
import { apolloClient } from '@/lib/apollo/apollo-client';
import { graphql } from '@/gql';

const OnboardingMiddlewareQuery = graphql(`
    query OnboardingMiddlewareQuery {
        viewer {
            id
            firstName
            lastName
            phoneNumber
            organizationMembersCollection {
                edges {
                    node {
                        organization {
                            id
                            name
                        }
                    }
                }
            }
        }
    }
`);

export async function handleOnboardingRedirect(request: NextRequest) {
    // Skip onboarding check for public routes and static files
    if (
        request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/signup') ||
        request.nextUrl.pathname.startsWith('/onboarding')
    ) {
        return NextResponse.next();
    }

    try {
        const { data } = await apolloClient.query({
            query: OnboardingMiddlewareQuery
        });

        const hasCompleteProfile = data?.viewer?.firstName && 
            data?.viewer?.lastName && 
            data?.viewer?.phoneNumber;

        const hasOrganizations = data?.viewer?.organizationMembersCollection?.edges?.length ?? 0 > 0;

        const isOnboarded = hasCompleteProfile && hasOrganizations;

        if (!isOnboarded) {
            const url = request.nextUrl.clone();
            url.pathname = '/onboarding';
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } catch (error) {
        // If there's an error (like no auth), let the auth middleware handle it
        return NextResponse.next();
    }
}
