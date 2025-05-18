type CaseStudyLinkProps = {
  label: string;
  imageLink: string;
  alt: string;
  href: string;
  title: string;
  description: string;
};

const CaseStudyLink: React.FC<CaseStudyLinkProps> = ({
  href,
  label,
  imageLink,
  alt,
  title,
  description,
}) => {
  return (
    <article className="relative p-4 flex flex-col items-center">
      <a href={href} aria-label={label} className="group">
        <img
          src={imageLink}
          alt={alt}
          className="mb-4 max-w-[300px] md:max-w-[550px]"
        />
        <h3 className="font-display text-center text-3xl md:text-5xl group-has-hover:text-brand group-has-hover:underline">
          {title}
        </h3>
        <p>{description}</p>
      </a>
    </article>
  );
};

export default CaseStudyLink;
