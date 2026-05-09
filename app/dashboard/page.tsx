import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { Button } from '@/components/button';

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/signin');
    }

    return (
        <div className="min-h-[calc(100vh-80px)] bg-slate-950 px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-glow backdrop-blur-xl">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Dashboard</p>
                        <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back, {session?.user?.name || 'Creator'}.</h1>
                    </div>
                    <Button href="/" variant="secondary">
                        Explore launch tools
                    </Button>
                </div>
                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {[
                        { title: 'Audience signals', description: 'Review engagement and page momentum at a glance.' },
                        { title: 'Content workflow', description: 'Manage launch copy, assets, and product updates with ease.' },
                        { title: 'Security status', description: 'Deploy with confidence using secure auth and data control.' }
                    ].map((item) => (
                        <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{item.title}</p>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
