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
    href?: string;
}

export const features: FeatureItem[] = [
    {
        title: 'Premium Product Selection',
        description: 'Curated collection of high-quality products from trusted brands, ensuring you get the best value for your money.',
        icon: 'shopping',
        href: '/products'
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

export interface LifestyleProduct {
    name: string;
    category: string;
    price: string;
    merchant: string;
    productRef: string;
    website: string;
    websiteUrl: string;
    productPageUrl: string;
    imageUrl: string;
}

export const lifestyleProducts: LifestyleProduct[] = [
    {
        name: 'Ginger By Lifestyle Sling Bag',
        category: 'Fashion Bag',
        price: '₹1,599',
        merchant: 'Lifestyle Stores',
        productRef: 'turn0product1',
        website: 'Lifestyle Stores',
        websiteUrl: 'https://www.lifestylestores.com',
        productPageUrl: 'https://www.myntra.com/ginger-by-lifestyle-sling-bags?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Ginger By Lifestyle Geometric Printed PU Handheld Bag',
        category: 'Handbag',
        price: '₹2,499',
        merchant: 'Lifestyle Stores',
        productRef: 'turn0product2',
        website: 'Lifestyle Stores',
        websiteUrl: 'https://www.lifestylestores.com',
        productPageUrl: 'https://www.lifestylestores.com/in/en/SHOP-Ginger-By-Lifestyle-Geometric-Printed-PU-Handheld-Bag/p?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Ginger By Lifestyle Textured Sling Bag',
        category: 'Sling Bag',
        price: '₹1,399',
        merchant: 'Lifestyle Stores',
        productRef: 'turn0product4',
        website: 'Lifestyle Stores',
        websiteUrl: 'https://www.lifestylestores.com',
        productPageUrl: 'https://www.myntra.com/handbags/gingerbylifestyle/ginger-by-lifestyle-textured-sling-bag/39299977/buy?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Ginger By Lifestyle Pu Handheld Bag',
        category: 'Women\'s Bag',
        price: '₹2,499',
        merchant: 'Lifestyle Stores',
        productRef: 'turn0product5',
        website: 'Lifestyle Stores',
        websiteUrl: 'https://www.lifestylestores.com',
        productPageUrl: 'https://www.lifestylestores.com/in/en/search?q=Ginger+By+Lifestyle+Pu+Handheld+Bag&utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Ginger by Lifestyle PU Sling Bag',
        category: 'Fashion Accessories',
        price: '₹1,399',
        merchant: 'Lifestyle Stores',
        productRef: 'turn0product6',
        website: 'Lifestyle Stores',
        websiteUrl: 'https://www.lifestylestores.com',
        productPageUrl: 'https://www.myntra.com/ginger-by-lifestyle-sling-bags-handbags?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Wellbeing Nutrition Gym Bag',
        category: 'Wellness',
        price: '₹1,899',
        merchant: 'Wellbeing Nutrition',
        productRef: 'turn0product7',
        website: 'Wellbeing Nutrition',
        websiteUrl: 'https://wellbeingnutrition.com',
        productPageUrl: 'https://wellbeingnutrition.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Revolutionary Wellness Gym Bag',
        category: 'Fitness Lifestyle',
        price: '₹500',
        merchant: 'Revolutionary Wellness',
        productRef: 'turn0product8',
        website: 'Revolutionary Wellness',
        websiteUrl: 'https://revolutionarywellness.in',
        productPageUrl: 'https://revolutionarywellness.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Ancient Wheel Holistic Life Tote Bag',
        category: 'Tote Bag',
        price: '₹779',
        merchant: 'Frankly Wearing',
        productRef: 'turn0product9',
        website: 'Frankly Wearing',
        websiteUrl: 'https://franklywearing.com',
        productPageUrl: 'https://franklywearing.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Sauna & Wellness Bag',
        category: 'Wellness Accessories',
        price: '₹9,395',
        merchant: 'Loewen Meta',
        productRef: 'sauna-wellness-bag',
        website: 'Loewen Meta',
        websiteUrl: 'https://loewen-meta.com',
        productPageUrl: 'https://loewen-meta.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'UV Multi-Utility Bag',
        category: 'Smart Lifestyle',
        price: '₹3,999',
        merchant: 'iCase Travel',
        productRef: 'turn0product11',
        website: 'iCase Travel',
        websiteUrl: 'https://icasetravel.com',
        productPageUrl: 'https://icasetravel.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1622260613186-01c84641fcbc?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Magnetic Bag Company Magnetic Gym Bag',
        category: 'Smart Gym Bag',
        price: '₹978',
        merchant: 'Flipkart',
        productRef: 'turn0product12',
        website: 'Flipkart',
        websiteUrl: 'https://www.flipkart.com',
        productPageUrl: 'https://www.flipkart.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Smart LED Waist Bag',
        category: 'Smart Gadget Fashion',
        price: '₹3,999',
        merchant: 'Amazon India',
        productRef: 'turn0product13',
        website: 'Amazon India',
        websiteUrl: 'https://www.amazon.in',
        productPageUrl: 'https://www.amazon.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1622260613186-01c84641fcbc?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Wellness Device',
        category: 'Wellness Gadget',
        price: '₹1,519',
        merchant: 'Amazon India',
        productRef: 'turn0product17',
        website: 'Amazon India',
        websiteUrl: 'https://www.amazon.in',
        productPageUrl: 'https://www.amazon.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: '3 Times A Day Portable Travel Pill Organizer',
        category: 'Health Organizer',
        price: '₹799',
        merchant: 'Frizty Retail',
        productRef: 'turn0product19',
        website: 'Frizty Retail',
        websiteUrl: 'https://frizty.com',
        productPageUrl: 'https://friztyretail.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Wellness Wearable + Charger',
        category: 'Smart Wellness',
        price: '₹49,268',
        merchant: 'Desertcart',
        productRef: 'turn0product20',
        website: 'Desertcart India',
        websiteUrl: 'https://www.desertcart.in',
        productPageUrl: 'https://www.desertcart.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Wellness Sampler Gift Box',
        category: 'Wellness Gift',
        price: '₹1,099',
        merchant: 'Brown Living',
        productRef: 'turn0product21',
        website: 'Brown Living',
        websiteUrl: 'https://brownliving.in',
        productPageUrl: 'https://brownliving.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'White Mandala Yoga Mat Side Bag',
        category: 'Yoga Lifestyle',
        price: '₹510',
        merchant: 'WiseLife',
        productRef: 'turn0product23',
        website: 'WiseLife',
        websiteUrl: 'https://www.wiselife.in',
        productPageUrl: 'https://www.wiselife.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'LR Decor Magnet Gym Bag',
        category: 'Fitness Accessories',
        price: '₹2,005',
        merchant: 'Amazon India',
        productRef: 'turn0product24',
        website: 'Amazon India',
        websiteUrl: 'https://www.amazon.in',
        productPageUrl: 'https://www.amazon.in?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center'
    },
    {
        name: 'Style Homez ALEXA Luxury Lounger Bean Bag',
        category: 'Home Lifestyle',
        price: '₹1,149',
        merchant: 'JioMart',
        productRef: 'turn0product25',
        website: 'JioMart',
        websiteUrl: 'https://www.jiomart.com',
        productPageUrl: 'https://www.jiomart.com?utm_source=chatgpt.com',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center'
    }
];


