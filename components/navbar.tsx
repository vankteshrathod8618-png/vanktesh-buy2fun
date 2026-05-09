'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navItems } from '@/lib/content';
import { Button } from '@/components/button';
import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-14">
                <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                    Buy 2 Fun
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-white/20 hover:text-white"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Button href="/signin" variant="secondary">
                        Log in
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
