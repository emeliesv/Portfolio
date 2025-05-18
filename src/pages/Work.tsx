import type { JSX } from "react";
import CaseStudyLink from "../components/CaseStudyLink";
import FokusPreview from "/images/FokusPreview.png?url";
import JenyfPreview from "/images/JenyfPreview.png?url";
import FutureWoodPreview from "/images/FutureWoodPreview.png?url";

const Work = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-5xl bg-brand text-brand-secondary w-fit p-3">
        WORK
      </h2>
      <CaseStudyLink
        href="work/jenyf"
        label="Read case study for frontend project Jenyf"
        imageLink={JenyfPreview}
        alt="A laptop and smartphone showcases the landingpage of Jeny-site. The heading says 'Fall favourites are here' and there is an image of three persons lauging in clothes that fit well during fall-season"
        title="< Frontend case study for JENYF >"
        description="An e-commerce website"
      />
      <CaseStudyLink
        href="work/fokus"
        label="Read case study for UX-project Fokus"
        imageLink={FokusPreview}
        alt="Three smartphones displaying parts of the study-app Fokus interface: The startpage for a logged in user, the log in interface and an interface displaying tasks in Fokus."
        title="< UX case study for Fokus >"
        description="A studyapp for students to structure and plan their studies."
      />
      <CaseStudyLink
        href="work/futurewood"
        label="Read case study for UX-project Future Wood"
        imageLink={FutureWoodPreview}
        alt="A laptop and smartphone displaying the landingpage of Future Wood, the backgroundimage is a luxurious wooden table set on a fluffy white carpet, in front of light curtains draped before large windows."
        title="< UX case study for Future Wood >"
        description="An e-commerce website for custommade, luxurious wooden tables"
      />
    </section>
  );
};

export default Work;
