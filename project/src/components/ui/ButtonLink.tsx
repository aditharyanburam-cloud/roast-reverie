import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const BASE_CLASSES =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-terracotta-600 text-cream-50 shadow-[0_12px_28px_-14px_rgba(156,84,57,0.9)] hover:bg-terracotta-700 hover:shadow-[0_16px_32px_-14px_rgba(131,69,44,0.9)]',
  outline:
    'border border-espresso-700 text-espresso-700 hover:bg-espresso-700 hover:text-cream-50',
};

export default function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...anchorProps
}: ButtonLinkProps) {
  return (
    <a className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`} {...anchorProps}>
      {children}
    </a>
  );
}
