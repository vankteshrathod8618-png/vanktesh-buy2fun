import Link from 'next/link';

const footerNav = [
    { label: 'Careers', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' }
];

const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com', icon: 'https://simpleicons.org/icons/twitter.svg' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'https://simpleicons.org/icons/linkedin.svg' }
];

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-12 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-lg font-semibold text-white">Buy 2 Fun</p>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                        Your trusted destination for premium products with quality assurance, fast shipping, and exceptional customer service.
                    </p>
                </div>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        {footerNav.map((item) => (
                            <Link key={item.label} href={item.href} className="transition hover:text-white">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((item) => (
                            <Link key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
