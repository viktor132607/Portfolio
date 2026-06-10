type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-10 w-full">
      <h2 className="w-full text-4xl font-semibold tracking-[-0.05em] text-ink dark:text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}