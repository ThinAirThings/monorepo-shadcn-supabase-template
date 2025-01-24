'use client';

import { Card, CardContent } from '@usepulse/ui/components/card';
import { DotPattern } from '@usepulse/ui/components/dot-pattern';
import { cn } from '@usepulse/ui/lib/utils';
import Image from 'next/image';

export default function UnauthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 relative">
            <DotPattern
                className={cn(
                "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] z-0",
                )}
            />
            <Card className="w-full max-w-md p-8 shadow-fade relative z-10">
                <div className="flex justify-center">
                    {/* <Image
                        src="/thinair.logo.svg"
                        alt="Blueprint Logo"
                        width={200}
                        height={200}
                        priority
                    /> */}
                </div>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </main>
    );
}
