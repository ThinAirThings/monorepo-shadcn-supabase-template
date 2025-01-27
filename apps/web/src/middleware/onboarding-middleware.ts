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
    // Skip auth routes and static files
    if (
        request.nextUrl.pathname.startsWith('/login') ||
        request.nextUrl.pathname.startsWith('/signup')
    ) {
        return NextResponse.next();
    }

    try {
        const { data } = await apolloClient.query({
            query: OnboardingMiddlewareQuery,
            fetchPolicy: 'network-only'
        });

        const hasCompleteProfile = !!(data?.viewer?.firstName && 
            data?.viewer?.lastName && 
            data?.viewer?.phoneNumber);

        const hasOrganizations = (data?.viewer?.organizationMembersCollection?.edges?.length ?? 0) > 0;
        const isOnboarded = hasCompleteProfile && hasOrganizations;
        // Create clean URL for redirects (without query params)
        const createRedirectUrl = (pathname: string) => {
            const url = request.nextUrl.clone();
            url.pathname = pathname;
            url.search = ''; // Clear all query parameters
            return url;
        };

        // If user is not onboarded and trying to access any route except onboarding,
        // redirect to onboarding
        if (!isOnboarded && !request.nextUrl.pathname.startsWith('/onboarding')) {
            return NextResponse.redirect(createRedirectUrl('/onboarding'));
        }

        // If user is onboarded and trying to access onboarding route,
        // redirect to dashboard
        if (isOnboarded && request.nextUrl.pathname.startsWith('/onboarding')) {
            return NextResponse.redirect(createRedirectUrl('/dashboard'));
        }

        return NextResponse.next();
    } catch (error) {
        // If there's an error (like no auth), let the auth middleware handle it
        return NextResponse.next();
    }
}
