import { SectionHeading } from '@/components/section-heading';
import Link from 'next/link';

export default function BeautyProductPage() {
    return (
        <section className="px-6 py-24 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                <SectionHeading eyebrow="Beauty Products" title="Premium beauty essentials for glowing skin and effortless style." />
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                    Discover beauty products crafted to elevate your skincare and grooming routine. This collection features luxurious essentials for everyday self-care.
                </p>
                <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Skincare favorites</h3>
                        <p className="text-slate-400">Find nourishing products designed to refresh and restore your daily skincare ritual.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Haircare and styling</h3>
                        <p className="text-slate-400">Select premium haircare essentials and styling tools for healthy, polished results.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Everyday beauty</h3>
                        <p className="text-slate-400">Beauty essentials that blend quality ingredients with modern performance.</p>
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
