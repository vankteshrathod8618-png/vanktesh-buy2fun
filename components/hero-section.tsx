'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/button';
import { analytics, stats } from '@/lib/content';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
    return (
        <section className="relative overflow-hidden px-6 pt-20 sm:px-10 lg:px-14">
            <div className="absolute inset-x-0 top-0 h-[420px] bg-hero-glow blur-3xl opacity-70" />
            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 pb-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex rounded-full border border-slate-600 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 shadow-sm backdrop-blur">
                            Built for modern teams who move fast
                        </span>
                        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                            Launch premium product experiences with speed and confidence.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Aurea combines elegant interfaces, secure integrations, and conversion-first page architecture so you can focus on building momentum.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button href="#pricing">Start your launch</Button>
                            <Button variant="secondary" href="#features">
                                Explore features
                            </Button>
                        </div>
                        <div className="mt-12 grid gap-4 sm:grid-cols-2">
                            {stats.map((item) => (
                                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur">
                                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow backdrop-blur-sm">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-slate-200 to-sky-300" />
                        <div className="space-y-6 pt-6">
                            {analytics.map((item) => (
                                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-5">
                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                                    <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
