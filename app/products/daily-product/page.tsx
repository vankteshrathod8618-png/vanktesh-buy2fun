import { SectionHeading } from '@/components/section-heading';
import Link from 'next/link';

export default function DailyProductPage() {
    return (
        <section className="px-6 py-24 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                <SectionHeading eyebrow="Daily Products" title="Everything you need for a smarter everyday routine." />
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                    Our Daily Products collection features curated essentials designed to simplify your day, boost comfort, and deliver exceptional value.
                </p>
                <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Household essentials</h3>
                        <p className="text-slate-400">Discover daily-use favorites such as premium home care, kitchen essentials, personal wellness products, and more.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Comfort and convenience</h3>
                        <p className="text-slate-400">Find products that make daily routines easier, from snacks and soft textiles to practical lifestyle accessories.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Trusted quality</h3>
                        <p className="text-slate-400">Every item is handpicked for durability, reliability, and everyday performance.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <Link href="/products" className="inline-flex rounded-full bg-brand-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-200">
                        Back to product categories
                    </Link>
                </div>
            </div>
        </section>
    );
}
