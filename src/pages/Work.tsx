import type { JSX } from "react";
import CaseStudyLink from "../components/CaseStudyLink";
import FokusPreview from "/images/FokusPreview.png?url";
import JenyfPreview from "/images/JenyfPreview.png?url";
import FutureWoodPreview from "/images/FutureWoodPreview.png?url";
import DoubleDiamondResearch from "/images/DoubleDiamondResearch.png?url";

const Work = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-6xl md:text-8xl m-4">WORK</h2>
      <div className="flex flex-col p-5 gap-6">
        <CaseStudyLink
          href="work/passiontointegration"
          label="Read case study for UX-research project From Passion to integration"
          imageLink={DoubleDiamondResearch}
          customClass="md:max-w-[450px] md:m-10"
          alt="A whiteboard illustrating the Double Diamond process. Post-it notes with words connected to teamwork is surrounding the Double Diamond illustration."
          title="From Passion to Integration"
          description="A UX case study for a research project on how to integrate accessibility into organisational culture"
        />
        <CaseStudyLink
          href="work/fokus"
          label="Read case study for UX-project Fokus"
          imageLink={FokusPreview}
          alt="Three smartphones displaying parts of the study-app Fokus interface: The startpage for a logged in user, the log in interface and an interface displaying tasks in Fokus."
          title="Fokus"
          description="UX case study for Fokus - A study app for students to structure and plan their studies."
        />
        <CaseStudyLink
          href="work/jenyf"
          label="Read case study for frontend project Jenyf"
          imageLink={JenyfPreview}
          alt="A laptop and smartphone showcases the landingpage of Jeny-site. The heading says 'Fall favourites are here' and there is an image of three persons lauging in clothes that fit well during fall-season"
          title="JENYF"
          description="Frontend case study for e-commerce website JENYF, selling miscellaneous clothing and accessories."
        />
        <CaseStudyLink
          href="work/futurewood"
          label="Read case study for UX-project Future Wood"
          imageLink={FutureWoodPreview}
          alt="A laptop and smartphone displaying the landingpage of Future Wood, the backgroundimage is a luxurious wooden table set on a fluffy white carpet, in front of light curtains draped before large windows."
          title="Future Wood"
          description="UX case study for an e-commerce website for custom made, luxurious wooden tables"
        />
      </div>
    </section>
  );
};

export default Work;
