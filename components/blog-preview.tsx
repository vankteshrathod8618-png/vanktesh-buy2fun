interface Post {
    title: string;
    description: string;
    href: string;
}

export function BlogPreview({ posts }: { posts: Post[] }) {
    return (
        <div className="grid gap-6">
            {posts.map((post) => (
                <article key={post.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow transition hover:-translate-y-1">
                    <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Article</p>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{post.description}</p>
                    <a href={post.href} className="mt-6 inline-flex text-sm font-semibold text-brand-300 transition hover:text-brand-100">
                        Read article →
                    </a>
                </article>
            ))}
        </div>
    );
}
