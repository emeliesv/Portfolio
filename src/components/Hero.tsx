import type { JSX } from "react";
import GithubIcon from "../assets/Github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import { IconLink } from "./IconLink";

const Hero = (): JSX.Element => {
  return (
    <div className="flex items-center w-full">
      {/* Lägga in en animering, så att när sidan först laddas kommer enbart "Hi there" och sedan läggs denna vertikalt som nu */}
      <div className="bg-brand h-[675px] w-[200px] md:w-[375px] relative">
        <h1 className="font-display text-brand-secondary text-8xl [writing-mode:vertical-rl] rotate-180 absolute top-[100px] -right-[10px]">
          Hi there,
        </h1>
      </div>
      <div className="flex flex-col justify-evenly w-full">
        <div className="flex flex-col m-6 justify-center h-80">
          <h2 className="font-display text-5xl">I'm Emelie</h2>
          <p>
            A frontend developer with UX and accessibility competence <br />
            Based in Stockholm
          </p>
        </div>
        <div className="flex gap-2.5 w-full justify-center md:justify-end">
          <IconLink
            href="https://github.com/emeliesv"
            label="Go to Emelies Github profile"
            Icon={GithubIcon}
            size={44}
          />
          <IconLink
            href="https://www.linkedin.com/in/emelie-svensson-b7950670/"
            label="Go to Emelies Linkedin profile"
            Icon={LinkedinIcon}
            size={44}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
