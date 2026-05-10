import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';

export default function ProductsPage() {
    const categories = [
        {
            title: 'Daily Products',
            description: 'Essential everyday items selected for convenience, comfort, and value.',
            href: '/products/daily-product'
        },
        {
            title: 'Electronic Products',
            description: 'High-quality gadgets and devices from trusted brands to power your lifestyle.',
            href: '/products/electronic-product'
        },
        {
            title: 'Beauty Products',
            description: 'Premium beauty essentials for skincare, haircare, and everyday self-care routines.',
            href: '/products/beauty-product'
        },
        {
            title: 'Lifestyle Products',
            description: 'Premium lifestyle items designed to elevate your personal style and everyday experiences.',
            href: '/products/lifestyle-product'
        }
    ];

    return (
        <section className="px-6 py-24 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-7xl">
                <SectionHeading eyebrow="Premium product categories" title="Choose the collection that fits your needs." />
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                    Explore our curated collections and discover the best products across daily essentials, electronics, beauty, and lifestyle. Each category brings a handpicked selection built for quality and style.
                </p>
                <div className="mt-12 grid gap-6 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link key={category.title} href={category.href} className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 transition hover:-translate-y-1 hover:border-brand-300/30 hover:bg-slate-900/95">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{category.title}</p>
                            <h2 className="mt-4 text-2xl font-semibold text-white">{category.title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-400">{category.description}</p>
                            <p className="mt-6 text-sm font-semibold text-brand-300">View collection →</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
