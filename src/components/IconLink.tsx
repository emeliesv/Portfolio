type IconLinkProps = {
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  size?: number;
};

export const IconLink: React.FC<IconLinkProps> = ({
  href,
  Icon,
  label,
  size = 44,
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:bg-brand p-1.5 focus-visible:outline-2 focus-visible:outline-brand-secondary"
    >
      <Icon
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
        className="fill-current text-black group-hover:text-brand-secondary transition-colors"
      />
    </a>
  );
};
