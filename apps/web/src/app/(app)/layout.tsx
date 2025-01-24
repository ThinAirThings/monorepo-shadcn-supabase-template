'use client';

import { AuthenticatedProviders } from "@/components/authenticated-providers"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthenticatedProviders>
            {children}
        </AuthenticatedProviders>
    )
}

