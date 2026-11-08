interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-[1.12] text-espresso-900 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-[1.6] text-espresso-500 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
