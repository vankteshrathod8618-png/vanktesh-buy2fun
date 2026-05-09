import { ShoppingCart, Shield, Truck } from 'lucide-react';
import type { FeatureIcon } from '@/lib/content';

const iconMap = {
    shopping: ShoppingCart,
    quality: Shield,
    delivery: Truck
};

interface Feature {
    title: string;
    description: string;
    icon: FeatureIcon;
}

export function FeatureCard({ feature }: { feature: Feature }) {
    const Icon = iconMap[feature.icon];

    return (
        <div className="glass-panel p-8 shadow-glow">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800/90 text-brand-300 shadow-inner">
                <Icon size={20} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{feature.description}</p>
        </div>
    );
}
