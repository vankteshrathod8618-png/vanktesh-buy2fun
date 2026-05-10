import { SectionHeading } from '@/components/section-heading';
import Link from 'next/link';

export default function ElectronicProductPage() {
    return (
        <section className="px-6 py-24 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-6xl">
                <SectionHeading eyebrow="Electronic Products" title="A premium selection of gadgets and tech accessories." />
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                    Explore electronics designed for performance, style, and reliability. From smart devices to everyday tech accessories, this collection is built to impress.
                </p>
                <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-glow">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Smart devices</h3>
                        <p className="text-slate-400">Browse premium devices that enhance productivity, entertainment, and everyday connectivity.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Accessories and gadgets</h3>
                        <p className="text-slate-400">Find high-quality accessories for phones, laptops, audio systems, and more.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Trusted performance</h3>
                        <p className="text-slate-400">Each product is selected for dependable performance and modern design.</p>
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
