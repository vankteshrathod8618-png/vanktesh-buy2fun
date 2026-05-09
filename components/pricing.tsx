interface Plan {
    name: string;
    price: string;
    description: string;
    perks: string[];
}

export function Pricing({ plans }: { plans: Plan[] }) {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
                <div key={plan.name} className="glass-panel p-8 shadow-glow">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{plan.name}</p>
                    <p className="mt-6 text-5xl font-semibold tracking-tight text-white">{plan.price}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{plan.description}</p>
                    <ul className="mt-8 space-y-4 text-sm text-slate-300">
                        {plan.perks.map((perk) => (
                            <li key={perk} className="flex gap-3">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-400" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                        Select plan
                    </button>
                </div>
            ))}
        </div>
    );
}
