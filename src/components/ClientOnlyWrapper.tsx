"use client";

import { useEffect, useState } from "react";

interface ClientOnlyWrapperProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export function ClientOnlyWrapper({ children, fallback = null }: ClientOnlyWrapperProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}
