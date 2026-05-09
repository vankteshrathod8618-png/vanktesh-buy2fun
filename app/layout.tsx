import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Aurea — Premium launch platform for modern teams',
    description:
        'Aurea helps startups and product teams launch high-converting websites with confidence. Modern design, secure integration, and fast performance built for growth.',
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
        title: 'Aurea — Premium launch platform for modern teams',
        description:
            'Aurea helps startups and product teams launch high-converting websites with confidence. Modern design, secure integration, and fast performance built for growth.',
        type: 'website',
        url: 'https://yourdomain.com',
        images: [
            {
                url: 'https://yourdomain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Aurea premium website platform'
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
