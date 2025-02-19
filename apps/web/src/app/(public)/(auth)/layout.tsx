'use client';

import { apolloClient } from '@/lib/apollo/apollo-client';
import { ApolloProvider } from '@apollo/client';
import { Card, CardContent } from '@thinair-monorepo-template/ui/components/card';
import { DotPattern } from '@thinair-monorepo-template/ui/components/dot-pattern';
import { cn } from '@thinair-monorepo-template/ui/lib/utils';
import Image from 'next/image';

export default function UnauthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ApolloProvider client={apolloClient}>
            <main className="min-h-screen flex items-center justify-center p-4 relative">
                <DotPattern
                    className={cn(
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0",
                    )}
                />
                <Card className="w-full max-w-md p-8 shadow-fade relative z-10">
                    <div className="flex justify-center">
                        <Image
                            src="/thinair.logo.svg"
                            alt="Thinair Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </main>
        </ApolloProvider>
    );
}
