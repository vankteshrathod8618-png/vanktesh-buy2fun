export const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#blog' },
    { label: 'Contact', href: '#contact' }
];

export const stats = [
    { label: 'Launches powered', value: '1,250+' },
    { label: 'Conversion boost', value: '+32%' },
    { label: 'Secured integrations', value: '100+' }
];

export const analytics = [
    { label: 'Page speed', value: '97/100', description: 'Optimized for performance across every device.' },
    { label: 'Conversion-ready', value: 'Built-in', description: 'Design patterns that help visitors choose the right action.' },
    { label: 'Enterprise grade', value: 'Secure', description: 'Authentication, forms, and scalable backend structure included.' }
];

export type FeatureIcon = 'rocket' | 'plug' | 'zap';

export interface FeatureItem {
    title: string;
    description: string;
    icon: FeatureIcon;
}

export const features: FeatureItem[] = [
    {
        title: 'Launch-ready product pages',
        description: 'Launch key campaigns faster with reusable sections, modern UX, and conversion-focused layout blocks.',
        icon: 'rocket'
    },
    {
        title: 'Enterprise-ready integrations',
        description: 'Connect data sources, authentication, analytics, and third-party actions with secure integration points.',
        icon: 'plug'
    },
    {
        title: 'Performance-first architecture',
        description: 'Lazy load sections, optimize assets, and use server rendering so every page feels instant.',
        icon: 'zap'
    }
];

export const testimonials = [
    {
        name: 'Sofia Mercer',
        role: 'Founder, Luma Labs',
        quote: 'Aurea gave our launch the clarity and polish we needed to win investor confidence. Every interaction feels premium and fast.'
    },
    {
        name: 'Ethan Cole',
        role: 'VP of Product, Helix',
        quote: 'The design system and launch speed let our team move at a level we never expected. This is product quality reimagined.'
    }
];

export const plans = [
    {
        name: 'Starter',
        price: '$79',
        description: 'Perfect for solo founders and early product launches.',
        perks: ['Fast landing pages', 'Form capture + email-ready', 'Basic analytics']
    },
    {
        name: 'Scale',
        price: '$199',
        description: 'Designed for growing teams with advanced launch requirements.',
        perks: ['A/B sections', 'Auth and protected routes', 'Analytics integrations']
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Dedicated onboarding, security review, and bespoke launch architecture.',
        perks: ['Custom API workflows', 'SLA-grade security', 'Design system support']
    }
];

export const faqs = [
    {
        question: 'How does onboarding work?',
        answer: 'Get started with a quick setup conversation, then configure your brand, launch pages, and integrations in a matter of days.'
    },
    {
        question: 'Is authentication included?',
        answer: 'Yes. A curated auth system is integrated, with secure protected routes and flexible identity provider support for production.'
    },
    {
        question: 'Can you support custom backend workflows?',
        answer: 'Absolutely. The architecture includes API-ready endpoints and environment-based connectors to extend your product stack.'
    }
];

export const posts = [
    {
        title: 'How premium product launches win attention in 2026',
        description: 'A modern launch isn’t just a page; it’s a product experience designed to convert.',
        href: '#'
    },
    {
        title: 'Design tokens that keep your brand consistent',
        description: 'A guide for teams building a production-ready design system with scale in mind.',
        href: '#'
    }
];
