'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQ({ faqs }: { faqs: FAQItem[] }) {
    const [active, setActive] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {faqs.map((item, index) => {
                const isOpen = active === index;
                return (
                    <button
                        key={item.question}
                        type="button"
                        onClick={() => setActive(isOpen ? null : index)}
                        className="w-full rounded-[2rem] border border-white/10 bg-slate-900/80 px-6 py-5 text-left transition hover:border-white/20"
                        aria-expanded={isOpen}
                    >
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-left text-lg font-semibold text-white">{item.question}</span>
                            <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isOpen ? <p className="mt-4 text-sm leading-7 text-slate-400">{item.answer}</p> : null}
                    </button>
                );
            })}
        </div>
    );
}
