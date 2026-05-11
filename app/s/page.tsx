import Link from 'next/link';

export default function SPage() {
    return (
        <section className="min-h-screen bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-14">
            <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-900/90 p-10 shadow-glow ring-1 ring-white/10 backdrop-blur-xl">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.32em] text-brand-300">Sridatta Profile</p>
                            <h1 className="text-4xl font-semibold tracking-tight text-white">Sridatta NP</h1>
                            <p className="max-w-2xl text-lg leading-8 text-slate-300">Qualification: Engineering</p>
                        </div>

                        <blockquote className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 text-xl leading-9 text-slate-100 shadow-lg">
                            “Not everyone gets a genuine friend in life — I’m lucky I found one in you.”
                        </blockquote>

                        <Link
                            href="/"
                            className="inline-flex w-full max-w-max items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            Back to home
                        </Link>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
                        <img
                            src="/sridatta.svg"
                            alt="Sridatta NP"
                            className="h-full w-full rounded-[1.5rem] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
