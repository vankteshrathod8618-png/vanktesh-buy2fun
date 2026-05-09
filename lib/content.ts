export const navItems = [
    { label: 'Products', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
];

export const stats = [
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Products Sold', value: '50,000+' },
    { label: 'Customer Satisfaction', value: '4.9/5' }
];

export const analytics = [
    { label: 'Quality Guarantee', value: 'Premium', description: 'Only the highest quality products with satisfaction guarantee.' },
    { label: 'Fast Shipping', value: 'Free', description: 'Free shipping on all orders with express delivery options.' },
    { label: 'Customer Support', value: '24/7', description: 'Round-the-clock support for all your product needs.' }
];

export type FeatureIcon = 'shopping' | 'quality' | 'delivery';

export interface FeatureItem {
    title: string;
    description: string;
    icon: FeatureIcon;
}

export const features: FeatureItem[] = [
    {
        title: 'Premium Product Selection',
        description: 'Curated collection of high-quality products from trusted brands, ensuring you get the best value for your money.',
        icon: 'shopping'
    },
    {
        title: 'Quality Assurance',
        description: 'Every product undergoes rigorous quality checks and comes with our satisfaction guarantee for peace of mind.',
        icon: 'quality'
    },
    {
        title: 'Fast & Reliable Delivery',
        description: 'Swift shipping with real-time tracking, ensuring your orders arrive safely and on time every time.',
        icon: 'delivery'
    }
];

export const testimonials = [
    {
        name: 'Sofia Mercer',
        role: 'Verified Customer',
        quote: 'Buy 2 Fun exceeded my expectations! The product quality is outstanding and the delivery was lightning fast. Highly recommend!'
    },
    {
        name: 'Ethan Cole',
        role: 'Loyal Customer',
        quote: 'I\'ve been shopping with Buy 2 Fun for months now. Their customer service is exceptional and the products are always top-notch.'
    }
];

export const plans = [
    {
        name: 'Essentials Pack',
        price: '$49',
        description: 'Perfect for everyday needs with our most popular products.',
        perks: ['Curated product selection', 'Free shipping', '30-day returns']
    },
    {
        name: 'Premium Bundle',
        price: '$129',
        description: 'Complete package with premium products and exclusive items.',
        perks: ['Premium product collection', 'Express shipping', 'Priority support']
    },
    {
        name: 'Luxury Collection',
        price: '$299',
        description: 'Our finest selection for discerning customers who want the best.',
        perks: ['Luxury product assortment', 'White-glove delivery', 'Personal shopping assistant']
    }
];

export const faqs = [
    {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery. International orders may take 7-14 days.'
    },
    {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy on all products. Items must be in original condition with tags attached. Return shipping is free for defective items.'
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes! We ship to over 50 countries worldwide. International shipping rates and delivery times vary by location.'
    }
];

export const posts = [
    {
        title: 'Top 10 Must-Have Products for 2026',
        description: 'Discover the trending products that everyone is talking about this year.',
        href: '#'
    },
    {
        title: 'How to Choose Quality Products Online',
        description: 'A comprehensive guide to making smart purchasing decisions and avoiding common pitfalls.',
        href: '#'
    }
];
