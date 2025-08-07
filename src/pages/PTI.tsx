import type { JSX } from "react";
import { Link } from "react-router";
import IFLogo from "/images/IFlogotype.svg?url";
import DoubleDiamond from "/images/Doublediamond.svg?url";
import Muppets from "/images/DDworkshops.svg?url";
import Timeline from "/images/Timeline.svg?url";
import SolutionCards from "/images/SolutionCards.svg?url";

const PTI = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center max-w-[850px] gap-4">
      <Link
        to="/work"
        className="font-display text-3xl hover:text-brand hover:underline"
      >
        &lt; BACK
      </Link>

      <h2 className="font-display text-5xl bg-brand text-brand-secondary w-fit p-3 my-3">
        From Passion to Integration
      </h2>

      <div className="flex justify-center align-center m-4">
        <img
          src={IFLogo}
          alt="Logo for IF Insurances, a blue ellipsis with the letters IF in white"
          className="max-w-[300px] md:max-w-[550px]"
        />
      </div>

      <h3 className="font-display text-4xl">MY ROLE INCLUDED:</h3>
      <ul className="flex text-4xl gap-1.5 font-display flex-wrap">
        <li>UX RESEARCH</li>
        <span>|</span>
        <li>WORKSHOP FACILITATION</li>
      </ul>

      <p className="italic my-2.5">
        How might we foster long-term ownership and effective collaboration to
        integrate accessibility work into the organizational culture?
      </p>

      <h3 className="font-display text-3xl">Problem</h3>
      <p>
        Within many organizations, accessibility is either driven by a few
        passionate individuals or reduced to a checkbox, a task done out of
        obligation but deprioritized until the last minute due to lack of
        interest or understanding.
      </p>

      <h3 className="font-display text-3xl">Solution</h3>
      <p>
        To reduce the work burden of those who typically shoulder the
        responsibility of accessibility work, we wanted to increase ownership
        within teams across the company and integrate accessibility as a natural
        part of the work flow. To do this, we turned to a well-known method
        within UX research
      </p>

      <h3 className="font-display text-4xl">Double Diamond</h3>
      <p>
        The Double Diamond has four phases - discover as much as you can
        connected to the problem, define the specific problem you need to solve,
        develop solution by brainstorming and deliver a refined solution. By
        leveraging the four phases of the Double Diamond, from understanding the
        current state to shaping concrete, team-driven solutions, we shifted the
        view on accessibility. It went from being something that’s fuzzy, hard
        to grasp and in the hands of someone else to be something each
        participant could feel some connection to. When the participants
        themselves got to both explore the problems and hear other experiences
        through discussions, and then work together to come up with solutions,
        it is our firm belief that ownership is increased.
      </p>

      <img
        src={DoubleDiamond}
        alt="Two diamonds illustrating the Double Diamond process. The words discover and define are written in the first diamond. The words develop and deliver are sritten in the second."
      />

      <h3 className="font-display text-3xl">Discover and Define</h3>
      <p>
        We conducted six semistructured interviews with key roles at the
        company. The insights we gathered, combined with secondary research,
        helped us define hypothesis to create two workshops tailored to the
        specific needs for IF. The first collaborative workshop consisted of 15
        employees from different teams and focused on sharing experiences
        through discussions. The participants worked together in crossfunctional
        groups to identify problem areas and painpoints that occured during
        their accessibility work.
      </p>

      <img
        src={Muppets}
        alt="Two dolls smiling behind two ellipsis. 
        One ellipsis says 'Workshop 1 - identify problem areas' and the second says 'Workshop 2 - Generate solutions'."
      />

      <img
        src={Timeline}
        alt="A timeline in product development, from ideation and research to delivery"
      />

      <h3 className="font-display text-3xl">Develop</h3>
      <p>
        We analyzed the problems that had arised thematically and used them to
        design our second workshop. The participants got to explore different
        solutions to their identified problem areas using group discussions. To
        help them concretize their ideas we had designed solution templates.
        Again, focus was on sharing perspectives from different roles and
        combine their experiences to something tangable. The participants then
        got to pitch their ideas to all the groups and, through dot voting, vote
        for the ones they felt had the most potential to actually follow through
        and the idea they felt would have the biggest impact. This way, we made
        sure that the proposed solutions was relevant to both the employees and
        organization itself.
      </p>

      <img
        src={SolutionCards}
        alt="A template for concretizing solutions, starting with the solution and ending with what problem it solves."
      />

      <h3 className="font-display text-3xl">Deliver</h3>
      <p>
        All results from the workshops, both from discussion and the
        participants concrete solutions, as well as important insights from our
        research together with our hypothesis shaped the final delivery.
      </p>

      <h3 className="font-display text-4xl">Methods and data collection</h3>
      <p>
        This research was a qualitative study focusing on identifying painpoints
        and shaping tailored solutions relevant to IF.
      </p>

      <h3 className="font-display text-3xl">Data collection</h3>
      <ul className="list-disc px-3 text-xl">
        <li>
          Six semistructured interviews
          <p>
            The six semistructured interviews included rolse such as UX leads,
            Accessibility specialist, QA Engineer, developers and content & SEO
            managers. The questions we asked were connected to general work
            within accessibility, for example: “What parts of your work is
            connected to accessibility?” and “How is the responsibility
            distributed today?”
          </p>
        </li>
        <li>
          Crossfunctional workshops
          <p>
            Our two crossfunctional workshops included roles within UX,
            development, PO, Content & SEO, Business developers and QA’s. We
            aimed to map out the current state, identify challenges and
            painpoints concretize problems and solutions.{" "}
          </p>
        </li>
      </ul>

      <h3 className="font-display text-3xl">Analytical method</h3>
      <p>
        We used thematic analysis to identify recurring patterns and insights
        from the collected data. The analyzed insights was divided into themes
        then presented both during our second workshop and as a part of the
        final delivery.
      </p>

      <h3 className="font-display text-3xl">Key takeaways</h3>
      <p>
        The Double Diamond gave us structure and room for exploring and helped
        us ensure that every step forward was based on facts. It gave us, both
        as facilitators but also the participants in the workshop, a framework
        to be creative within. When focusing on ong term accessibility work this
        method is perfect, since every next step is based on the previously
        shared experiences and insights. The crossfunctional groups ensure
        multiple perspectives and increase understanding for what each roles
        contributes with.
        <br />
        The method itself has the possibility to ensure relevant solutions to
        problems and is applicable not only within accessibility work but any
        organizational problem that companies might face connected to ownership.
        To really get a full picture, this method should be repeated throughout
        a longer period of time. This way, the final delivery becomes a living
        basis for decision-making within companies.
      </p>
    </section>
  );
};

export default PTI;
