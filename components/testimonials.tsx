interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow backdrop-blur-xl">
                    <p className="text-xl leading-8 text-slate-100">“{item.quote}”</p>
                    <div className="mt-8">
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
