import type { JSX } from "react";
import Image from "/images/profilbild.png?url";

const About = (): JSX.Element => {
  return (
    <section className="flex flex-col py-8 gap-16">
      <div className="flex flex-col md:flex-row gap-3">
        <h2 className="font-display text-6xl md:text-8xl">ABOUT</h2>

        <div className="flex flex-col gap-3.5 max-w-[600px]">
          <h3 className="text-3xl">
            Great design starts by setting the ego aside and putting users
            first.
          </h3>
          <p>
            To me, it's not just about aesthetics - it's about inclusion. That's
            where you always should start: with an inclusive mindset. I design
            and develop accessible, responsive digital products grounded in real
            needs. Leveraging React, TypeScript and Node.js to take an idea from
            sketch to production, I enjoy the thrill of being a part of the
            whole production chain through agile development.
            <br />
            <br />
            Curiosity fuels me, whether I'm conducting user research,
            prototyping in Figma or learning a new technique at the pottery
            wheel. I value an open, playful team culture full of humor and
            humanity. Outside the office you'll find me singing gospel or
            belting karaoke, cooking something really delicious in the kitchen
            or getting nerdy with my friends around an engaging board game.
            <br />
            <br />
            Are you looking for someone who thrives at the intersection of UX
            and frontend development? Maybe you share my passion for
            accessibility or want to explore it further? Let's talk!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex flex-col md:flex-row md:items-center gap-3.5">
          <h3 className="font-display text-5xl min-w-[250px] flex md:justify-center">
            Skill set
          </h3>
          {/* Hitta snyggare sätt att layouta denna sektion */}
          <div>
            <ul className="flex flex-wrap gap-2.5 max-w-[350px] font-semibold">
              <li>Accessiblity</li>
              <li>Design Thinking</li>
              <li>UX research</li>
              <li>Figma</li>
              <li>Workshop Facilitating</li>
              <li>Prototyping</li>
              <li>UI design</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>Tailwind</li>
              <li>Firebase</li>
              <li>Notion</li>
              <li>CI/CD</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Code reviews</li>
              <li>Scrum</li>
              <li>Agile Work</li>
              <li>Accessibility audits</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center h-80">
          <img
            src={Image}
            alt="Portrait of Emelie with wavy copperhair, smiling at the camera against a brown brickwall background."
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
