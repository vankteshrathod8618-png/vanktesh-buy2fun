import Link from 'next/link';
import { lifestyleProducts } from '@/lib/content';

interface ProductPageProps {
    params: {
        productRef: string;
    };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
    const product = lifestyleProducts.find(p => p.productRef === params.productRef);

    if (!product) {
        return (
            <section className="px-6 py-24 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold text-white">Product not found</h1>
                    <p className="mt-4 text-slate-400">The product you're looking for doesn't exist.</p>
                    <Link href="/products/lifestyle-product" className="mt-8 inline-flex rounded-full bg-brand-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-200">
                        Back to Lifestyle Products
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="px-6 py-24 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-4xl">
                <Link href="/products/lifestyle-product" className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200">
                    ← Back to Lifestyle Products
                </Link>

                <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
                    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 overflow-hidden">
                        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{product.category}</p>
                            <h1 className="mt-4 text-4xl font-bold text-white">{product.name}</h1>
                        </div>

                        <div className="space-y-2">
                            <p className="text-5xl font-bold text-brand-300">{product.price}</p>
                            <p className="text-slate-400">from {product.merchant}</p>
                        </div>

                        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 space-y-4">
                            <div>
                                <p className="text-sm text-slate-400">Product Reference</p>
                                <p className="text-white font-semibold">{product.productRef}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Seller</p>
                                <p className="text-white font-semibold">{product.merchant}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Category</p>
                                <p className="text-white font-semibold">{product.category}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                            <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-brand-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-brand-200">
                                Visit Merchant
                            </a>
                            <a href={product.productPageUrl} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-brand-300/30 hover:bg-slate-900/95">
                                View Product Page
                            </a>
                            <Link href="/products/lifestyle-product" className="flex-1 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-brand-300/30 hover:bg-slate-900/95">
                                More Products
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/90 p-10">
                    <h2 className="text-2xl font-semibold text-white">About This Product</h2>
                    <p className="mt-4 text-slate-400">
                        This {product.category.toLowerCase()} is available at {product.merchant}. With a price of {product.price}, it offers excellent value in the lifestyle category. Browse similar products or visit the merchant's website for more information.
                    </p>
                </div>
            </div>
        </section>
    );
}
