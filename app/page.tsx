import Link from 'next/link';
import { FeatureCard } from '@/components/feature-card';
import { HeroSection } from '@/components/hero-section';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { BlogPreview } from '@/components/blog-preview';
import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { features, plans, posts, testimonials, faqs } from '@/lib/content';

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <section id="features" className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Why customers love Buy 2 Fun" title="Quality products, exceptional service, unbeatable value." />
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950/90 px-6 py-24 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-glow backdrop-blur-xl">
                    <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Conversion architecture</p>
                            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Built with every signal of trust, speed, and clarity.
                            </h2>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                                Fast load times, beautiful motion, and a polished structure that directs visitors to your key actions. Every section supports revenue, retention, and brand value.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {['Global analytics', 'Advanced conversion flows', 'Secure integrations', 'Fast deployment'].map((item) => (
                                <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                                    <p className="font-semibold text-white">{item}</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">Premium patterns that keep your launch polished and predictable.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Loved by product teams" title="Trusted by growing startups and digital pioneers." />
                    <Testimonials testimonials={testimonials} />
                </div>
            </section>

            <section id="pricing" className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Pricing designed for scaling" title="Choose the plan that matches your launch ambition." />
                    <Pricing plans={plans} />
                </div>
            </section>

            <section className="bg-slate-950/90 px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading eyebrow="Questions answered" title="Everything you need to know before launch." />
                    <FAQ faqs={faqs} />
                </div>
            </section>

            <section id="blog" className="px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
                    <div>
                        <SectionHeading eyebrow="Insights for modern teams" title="News, guides, and growth resources." />
                        <p className="mt-4 max-w-xl text-slate-400">
                            Practical writing for founders, designers, and product leaders who want real launch momentum.
                        </p>
                    </div>
                    <BlogPreview posts={posts} />
                </div>
            </section>

            <section className="border-t border-white/10 bg-slate-950/90 px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
                    <div>
                        <SectionHeading eyebrow="Start your launch" title="Bring your next product story to life with a launch-ready website." />
                        <p className="mt-4 max-w-xl text-slate-400">
                            Secure integrations, modern performance, and premium motion design built into every experience.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>

            <section className="px-6 py-16 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/95 px-4 py-3 text-center">
                    <p className="text-lg font-semibold text-slate-900">
                        Created by{' '}
                        <span className="inline-flex gap-1">
                            <Link href="/s" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-300 text-sm font-bold text-slate-950 transition hover:bg-brand-200">
                                S
                            </Link>
                            <Link href="/u" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-300 text-sm font-bold text-slate-950 transition hover:bg-brand-200">
                                U
                            </Link>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">V</span>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">Y</span>
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
}
