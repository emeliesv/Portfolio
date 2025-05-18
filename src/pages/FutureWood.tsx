import type { JSX } from "react";
import { Link } from "react-router";
import FWPreview from "/images/FutureWoodPreview.png?url";
import AvatarOne from "/images/futurewoodavatar1.png?url";
import AvatarTwo from "/images/futurewoodavatar2.png?url";
import AvatarThree from "/images/futurewoodavatar3.png?url";
import MockupSharpGreen from "/images/futurewoodmobilegreensharp.png?url";
import MockupRoundGreen from "/images/futurewoodmobilegreenround.png?url";
import MockupSharpBrown from "/images/futurewoodmobilebrownsharp.png?url";
import MockupRoundBrown from "/images/futurewoodmobilebrownround.png?url";
import DesignDecisions from "/images/futurewooddesigndecisions.png?url";
import CustomPreview from "/images/futurewoodcustom.png?url";
import CustomPreviewPopup from "/images/futurewoodcustompopup.png?url";

const FutureWood = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center max-w-[850px] gap-4">
      <Link
        to="/work"
        className="font-display text-3xl hover:text-brand hover:underline"
      >
        &lt; BACK
      </Link>
      <h2 className="font-display text-5xl bg-brand text-brand-secondary w-fit p-3 my-3">
        FUTURE WOOD
      </h2>
      <div className="w-full flex justify-end m-4">
        <img
          src={FWPreview}
          alt="A laptop and smartphone showcases the landingpage of Jeny-site. The heading says 'Fall favourites are here' and there is an image of three persons lauging in clothes that fit well during fall-season"
        />
      </div>
      <h3 className="font-display text-4xl">MY ROLE INCLUDED:</h3>
      <ul className="flex text-4xl gap-1.5 font-display flex-wrap">
        <li>UX RESEARCH</li>
        <span>|</span>
        <li>WORKSHOP FACILITATOR</li>
        <span>|</span>
        <li>UI DESIGN</li>
        <span>|</span>
        <li>USABILITY TESTS</li>
        <span>|</span>
        <li>SCRUM MASTER</li>
      </ul>
      <p className="italic my-2.5">
        How might we help customers design high-quality, sustainable wooden
        tables that fit their unique needs, while ensuring a smooth and
        intuitive shopping experience?
      </p>
      <h3 className="font-display text-3xl">Problem</h3>
      <p>
        Many customers seeking high-quality wooden tables struggle to find
        products that align with their specific aesthetic, functional, and
        quality expectations. They often experience uncertainty about material
        choices, durability, and customization options. Additionally, online
        furniture shopping can feel impersonal, making it difficult for
        customers to feel confident in their purchase decisions. The lack of
        clear, structured guidance in the customization process can result in
        frustration and abandoned carts.
      </p>
      <h3 className="font-display text-3xl">Solution</h3>
      <p>
        Future Wood provides an intuitive platform for designing custom wooden
        tables, balancing simplicity with flexibility. Trust-building elements
        like quality certifications and sustainability transparency enhance user
        confidence.
      </p>
      <h3 className="font-display text-4xl">Research & ideation</h3>
      <p>
        Both qualitative and quantitative research through competitor analysis,
        user interviews, and usability testing to understand customer behaviors
        and pain points.
      </p>
      <h3 className="font-display text-3xl">Key findings</h3>
      <ul className="list-disc px-3 text-xl">
        <li>
          Most users needed a structured decision-making process for confidence
          in their purchase, while others preferred a faster buying journey.
        </li>
        <li>
          Trust indicators like certifications and sustainability details were
          crucial.
        </li>
        <li>
          Familiar e-commerce structures improved usability and engagement.{" "}
        </li>
        <li>
          Mobile accessibility and clear visual hierarchy boosted conversion
          rates.
        </li>
      </ul>

      <p>
        Based on our research, we identified three primary customer personas:
      </p>
      <div className="flex flex-wrap max-w-[300px] md:max-w-[800px] justify-center gap-3">
        <div className="flex justify-center items-center w-80">
          <img
            src={AvatarOne}
            alt="Avatar of a man on skateboard, dressed casually with a beanie and red shirt."
            className="w-12"
          />
          <p>
            <b>The quality-driven</b>
            <br />
            Prioritizes durability over time, considers material quality
            crucial.
          </p>
        </div>
        <div className="flex justify-center items-center w-80">
          <img
            src={AvatarTwo}
            alt="Avatar of a woman in a white dress, holding a notepad."
            className="w-12"
          />
          <p>
            <b>The pragmatic</b>
            <br />
            Takes personal circumstances into account. Values easy maintenance.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center w-80">
          <img
            src={AvatarThree}
            alt="Avatar of a woman with white and pink hair, dressed in a black coat, red pants and white shirt holding a computer."
            className="w-12"
          />
          <p>
            <b>The design-conscious</b>
            <br />
            Value material aesthetics and has a personal style{" "}
          </p>
        </div>
      </div>
      <h3 className="font-display text-3xl">Painpoints and opportunities</h3>

      <ul className="px-3 list-disc text-xl">
        <li>
          Uncertainty about material choices - Provide clear material guides and
          quality certifications
        </li>
        <li>
          Overwhelming customization process - Introduce a structured,
          step-by-step flow
        </li>
        <li>
          Need for trust and credibility - Higlight sustainable sourcing,
          quality assurance and real customer testimonials
        </li>
        <li>
          Lack of visual support - Use an interactive preview tool and
          high-quality product imagery
        </li>
      </ul>

      <h3 className="font-display text-4xl">Prototyping</h3>
      <p>
        An iterative design process followed, where we conducted many tests and
        gathered feedback which refined our interface further.
      </p>

      <h3 className="font-display text-3xl">Key features</h3>
      <ul className="px-3 list-disc text-xl">
        <li>
          Custom table builder that allows users to adjust dimensions, materials
          and finishes through an intuitive interface
        </li>
        <li>
          Quality certification that displays sustainability and craftmanship
        </li>
        <li>
          Visual product preview with high-quality images and interactive
          previews to help our users make informed decisions
        </li>
        <li>
          Streamlined checkout flow to provide a frictionless, structured
          process with minimal cognitive load
        </li>
        <li>
          Mobile first approach to ensure accessibility and ease of use across
          all devices
        </li>
      </ul>

      <h3 className="font-display text-3xl">Design choices</h3>
      <p>
        To align with our brand values of exclusivity, clarity, and modernity,
        we opted for a neutral color scheme with earthy tones to reflect natural
        material. The structured layout and rounded UI elements invites to a
        intuitive shopping experience while keeping a soft and inviting feel. A
        high-contrast typography for enhance readability and accessibility was
        crucial.
      </p>

      <div className="flex flex-col max-w-[300px] md:max-w-[800px]">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <img
            src={MockupSharpGreen}
            alt="Mockup landingpage of Future Wood, a large wooden table in the background and a green CTA-button with sharp edges"
            className="w-40"
          />
          <img
            src={MockupRoundGreen}
            alt="Mockup landingpage of Future Wood, a large wooden table in the background and a green CTA-button with rounded edges"
            className="w-40"
          />
          <img
            src={MockupSharpBrown}
            alt="Mockup landingpage of Future Wood, a large wooden table in the background and a brown CTA-button with sharp edges"
            className="w-40"
          />
          <img
            src={MockupRoundBrown}
            alt="Mockup landingpage of Future Wood, a large wooden table in the background and a brown CTA-button with rounded edges"
            className="w-40"
          />
        </div>
        <img
          src={DesignDecisions}
          alt="Visual showing a color palette with dark green, dark brown, and beige. Contrast ratios are labeled: 10.46:1 for dark green and 13.67:1 for dark brown against the beige background. On the right, there are button examples in these colors with both rounded and square corners, demonstrating visual style and accessibility contrast"
        />
      </div>
      <p>
        After initial refinements, we conducted usability tests to validate the
        design. Users were asked to customize and order a dining table based on
        specific parameters.
      </p>

      <h3 className="font-display text-3xl">Findings and adjustment</h3>
      <p>
        The flow was intuitive, and all participants completed the task, but
        several insights led to improvements:
      </p>
      <ul className="list-disc px-3 text-xl">
        <li>
          Limited interactivity in the prototype required clearer expectations.
        </li>
        <li>Lack of price visibility until checkout was a major oversight.</li>
        <li>Button labels and navigation needed more clarity.</li>
        <li>Quality certifications needed more prominence.</li>
        <li>
          Checkout terminology was adjusted—“Go to Checkout” became “Proceed to
          Payment.”
        </li>
      </ul>

      <p>
        Post-test refinements included dynamic pricing updates, enhanced product
        image responsiveness, and better trust signal integration throughout the
        journey.
      </p>

      <div className="flex flex-wrap gap-3 justify-center items-center">
        <img
          src={CustomPreview}
          alt="Overview of customization-page for Future Wood tables. To the right there is a slider for length-ratio, underneath it there are circles for colors or wood."
          className="w-80"
        />
        <img
          src={CustomPreviewPopup}
          alt="Overview of customization-page for Future Wood tables. The screen is slightly greyed out and to the right there is a popup that confirms an item has been put in the customer cart. Two buttons giving the user the choice of continuing shopping or proceed to checkout."
          className="w-80"
        />
      </div>

      <h3 className="font-display text-3xl">Key take aways</h3>
      <p>
        A structured customization process made the shopping experience
        intuitive and engaging. Transparency was essential - users needed clear
        pricing and visible trust signals to feel confident in their purchase.
        Mobile accessibility remained a priority, as most users accessed the
        site via their phones. The checkout experience played a pivotal role in
        conversion, and refining its clarity directly impacted user
        satisfaction.
      </p>

      <h3 className="font-display text-3xl">Final thoughts</h3>
      <p>
        Going through the entire process from research to implementation
        reinforced the importance of an MVP approach, focusing on the essentials
        first and iterating based on feedback. Being able to defend design
        decisions with usability insights strengthened our approach,
        particularly in ensuring accessibility compliance. Effective team
        communication and structured retrospectives were key to smooth
        collaboration and problem-solving. Lastly, consistent documentation
        throughout the project ensured a strong foundation for case study
        presentation.
      </p>
    </section>
  );
};

export default FutureWood;
