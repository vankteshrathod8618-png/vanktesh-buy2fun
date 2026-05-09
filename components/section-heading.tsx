interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
    return (
        <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
            {description ? <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p> : null}
        </div>
    );
}
