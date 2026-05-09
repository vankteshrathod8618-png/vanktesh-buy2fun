'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/button';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (result?.error) {
            setError('Invalid credentials. Please check your email and password.');
        }

        if (result?.ok) {
            window.location.href = '/dashboard';
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20 sm:px-10 lg:px-14">
            <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Secure access</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Sign in to your launch workspace</h1>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                    Use secure credentials to access your protected dashboard and workflow tools.
                </p>
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    <label className="block text-sm text-slate-200">
                        Email
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            required
                            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
                        />
                    </label>
                    <label className="block text-sm text-slate-200">
                        Password
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            required
                            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
                        />
                    </label>
                    {error ? <p className="text-sm text-rose-400">{error}</p> : null}
                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    );
}
