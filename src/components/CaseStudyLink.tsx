import { twMerge } from "tailwind-merge";

type CaseStudyLinkProps = {
  label: string;
  imageLink: string;
  alt: string;
  href: string;
  title: string;
  description: string;
  customClass?: string;
};

const CaseStudyLink: React.FC<CaseStudyLinkProps> = ({
  href,
  label,
  imageLink,
  alt,
  title,
  description,
  customClass,
}) => {
  return (
    <article>
      <a
        href={href}
        aria-label={label}
        className="group grid grid-cols-1 md:grid-cols-2 md:gap-3 items-center mb-4"
      >
        <img
          src={imageLink}
          alt={alt}
          className={twMerge(
            "max-w-[300px] md:max-w-full h-auto self-center",
            customClass
          )}
        />
        <div className="flex flex-col text-center md:text-left">
          <h3 className="font-display text-3xl md:text-5xl group-has-hover:text-brand group-has-hover:underline">
            {title}
          </h3>
          <p className="md:max-w-[500px]">{description}</p>
        </div>
      </a>
    </article>
  );
};

export default CaseStudyLink;
