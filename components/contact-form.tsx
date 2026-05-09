'use client';

import { useState } from 'react';
import { Button } from '@/components/button';

interface FormState {
    name: string;
    email: string;
    message: string;
}

export function ContactForm() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const body = await response.json();
            if (!response.ok) {
                setStatus(body.error || 'Unable to submit form. Please try again.');
            } else {
                setStatus('Message sent successfully. We’ll be in touch soon.');
                setForm({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setStatus('There was an issue sending your message.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form id="contact" onSubmit={handleSubmit} className="glass-panel rounded-[2rem] border-white/10 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Need Help?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Have questions about our products or need assistance with your order? We're here to help!</p>
            <div className="mt-8 grid gap-4">
                <label className="space-y-2 text-sm text-slate-200">
                    <span>Name</span>
                    <input
                        value={form.name}
                        onChange={(event) => handleChange('name', event.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
                        required
                    />
                </label>
                <label className="space-y-2 text-sm text-slate-200">
                    <span>Email</span>
                    <input
                        value={form.email}
                        onChange={(event) => handleChange('email', event.target.value)}
                        placeholder="you@company.com"
                        type="email"
                        className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
                        required
                    />
                </label>
                <label className="space-y-2 text-sm text-slate-200">
                    <span>Message</span>
                    <textarea
                        value={form.message}
                        onChange={(event) => handleChange('message', event.target.value)}
                        placeholder="Tell us how we can help with your shopping experience."
                        rows={6}
                        className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20"
                        required
                    />
                </label>
            </div>
            {status ? <p className="mt-6 text-sm text-slate-300">{status}</p> : null}
            <div className="mt-8">
                <Button type="submit" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send message'}
                </Button>
            </div>
        </form>
    );
}
