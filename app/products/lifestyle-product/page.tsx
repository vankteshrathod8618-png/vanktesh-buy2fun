import { SectionHeading } from '@/components/section-heading';
import { ProductCard } from '@/components/product-card';
import Link from 'next/link';
import { lifestyleProducts } from '@/lib/content';

export default function LifestyleProductPage() {
    return (
        <section className="px-6 py-24 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-7xl">
                <SectionHeading eyebrow="Lifestyle Products" title="Elevate your lifestyle with premium curated selections." />
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                    Discover lifestyle products designed to enhance your personal style, home environment, and everyday experiences with premium quality and thoughtful design.
                </p>
                
                <div className="mt-12 grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
                    {lifestyleProducts.map((product) => (
                        <ProductCard key={product.productRef} product={product} />
                    ))}
                </div>

                <div className="mt-16">
                    <Link href="/products" className="inline-flex rounded-full bg-brand-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-200">
                        Back to product categories
                    </Link>
                </div>
            </div>
        </section>
    );
}
