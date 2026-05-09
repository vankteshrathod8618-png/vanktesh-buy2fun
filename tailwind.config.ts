import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            boxShadow: {
                glow: '0 30px 75px rgba(15, 23, 42, 0.16)'
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(circle at top, rgba(99, 102, 241, 0.15), transparent 28%)'
            },
            colors: {
                brand: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    500: '#6366f1',
                    600: '#4f46e5'
                }
            }
        }
    },
    plugins: []
};

export default config;
