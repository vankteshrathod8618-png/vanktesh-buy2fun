import Link from 'next/link';
import type { LifestyleProduct } from '@/lib/content';

export function ProductCard({ product }: { product: LifestyleProduct }) {
    return (
        <Link href={`/products/lifestyle-product/${product.productRef}`} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 transition hover:-translate-y-1 hover:border-brand-300/30 hover:bg-slate-900/95">
            <div className="h-56 overflow-hidden bg-slate-950/90">
                <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition duration-200 group-hover:scale-105" />
            </div>
            <div className="space-y-4 p-6">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{product.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white line-clamp-2 group-hover:text-brand-300">{product.name}</h3>
                </div>
                <div className="flex items-end justify-between pt-4 border-t border-white/10">
                    <div>
                        <p className="text-2xl font-bold text-brand-300">{product.price}</p>
                        <p className="mt-1 text-xs text-slate-500">{product.merchant}</p>
                    </div>
                    <p className="text-sm text-slate-400">View →</p>
                </div>
            </div>
        </Link>
    );
}
