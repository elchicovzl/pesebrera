"use client";

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import useRedirectAfterSeconds from '@/hooks/use-redirect-after-seconds';
import { TriangleIcon, ShieldCheck } from 'lucide-react';

interface RedirectAfrerProps {
    title: string;
    seconds: number;
    icon: JSX.Element;
    redirect: string;
    variant: string;
}

export const RedirectAfrer : React.FC<RedirectAfrerProps> = ({
    title,
    seconds,
    icon,
    redirect,
    variant
  }) => {
    const { secondsRemaining } = useRedirectAfterSeconds(redirect, seconds);

    return (
        <div className="h-screen text-center">
            <Alert variant={variant}>
                {icon}
                <ShieldCheck className="h-5 w-5" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>
                    {secondsRemaining} {secondsRemaining > 1 ? 'seconds' : 'second'}.
                </AlertDescription>
            </Alert>
        </div>
    )
};