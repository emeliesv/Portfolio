type LinkProps = {
  href: string;
  label: string;
  title: string;
};

export const Link: React.FC<LinkProps> = ({ href, label, title }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="font-display text-4xl hover:text-brand-secondary active:bg-brand active:text-brand-secondary hover:bg-brand p-2 focus-visible:outline-2 focus-visible:outline-brand-secondary"
    >
      {title}
    </a>
  );
};
