import Link from 'next/link';
import { clsx } from 'clsx';

interface ButtonProps {
    href?: string;
    type?: 'button' | 'submit';
    variant?: 'primary' | 'secondary';
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    'aria-label'?: string;
}

export function Button({ href, type = 'button', variant = 'primary', className, children, disabled, 'aria-label': ariaLabel }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2';
    const variants = {
        primary: 'bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:bg-brand-400',
        secondary: 'border border-white/15 bg-white/5 text-slate-100 hover:border-white/30 hover:bg-white/10'
    };

    const classes = clsx(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Link href={href} className={classes} aria-label={ariaLabel ?? (typeof children === 'string' ? children : 'Button')}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} disabled={disabled} aria-label={ariaLabel}>
            {children}
        </button>
    );
}
