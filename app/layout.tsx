import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Buy 2 Fun — Premium Products & Exceptional Shopping Experience',
    description:
        'Discover premium products at Buy 2 Fun. Quality assurance, fast shipping, and outstanding customer service for all your shopping needs.',
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
        title: 'Buy 2 Fun — Premium Products & Exceptional Shopping Experience',
        description:
            'Discover premium products at Buy 2 Fun. Quality assurance, fast shipping, and outstanding customer service for all your shopping needs.',
        type: 'website',
        url: 'https://yourdomain.com',
        images: [
            {
                url: 'https://yourdomain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Buy 2 Fun premium products and shopping experience'
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        nocache: true
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-slate-950">
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
