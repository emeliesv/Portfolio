import type { JSX } from "react";
import { Link } from "react-router";
import FokusPreview from "/images/FokusPreview.png?url";
import Avatar from "/images/avatar.png?url";
import UserJourney from "/images/FokusUserJourney.png?url";
import WireframesOne from "/images/FokusWireframe1.png?url";
import WireframesTwo from "/images/FokusWireframe2.png?url";

const Fokus = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center max-w-[850px] gap-4">
      <Link
        to="/work"
        className="font-display text-3xl hover:text-brand hover:underline"
      >
        &lt; BACK
      </Link>

      <h2 className="font-display text-5xl bg-brand text-brand-secondary w-fit p-3 my-3">
        FOKUS
      </h2>

      <div className="w-full flex justify-center m-4">
        <img
          src={FokusPreview}
          alt="Three smartphones displaying parts of the study-app Fokus interface: The startpage for a logged in user, the log in interface and an interface displaying tasks in Fokus."
          className="max-w-[300px] md:max-w-[550px]"
        />
      </div>

      <h3 className="font-display text-4xl">MY ROLE INCLUDED:</h3>
      <ul className="flex text-4xl gap-1.5 font-display flex-wrap">
        <li>UX RESEARCH</li>
        <span>|</span>
        <li>UI DESIGN</li>
        <span>|</span>
        <li>USABILITY TESTS</li>
        <span>|</span>
        <li>ACCESSIBILITY SPECIALIST</li>
      </ul>

      <p className="italic my-2.5">
        How might we help students manage their studies in a structured and
        motivating way to reduce stress and improve their performance?
      </p>

      <h3 className="font-display text-3xl">Problem</h3>
      <p>
        Students often struggle with focus, time management, and planning their
        studies effectively. Many experience anxiety and stress due to
        ineffective study techniques and a lack of structured support. This
        problem is even more pronounced among students with cognitive
        difficulties such as ADHD or executive dysfunctions. The absence of a
        clear study structure leads to procrastination, last-minute stress, and
        difficulties in meeting deadlines.
      </p>

      <h3 className="font-display text-3xl">Solution</h3>
      <p>
        Fokus is a study planning app that helps students break down their
        assignments into manageable tasks, creating a structured timeline that
        promotes productivity. The app offers visual tracking, and motivational
        reminders, ensuring students stay on track while minimizing anxiety and
        procrastination.
      </p>

      <h3 className="font-display text-4xl">Research & ideation</h3>
      <p>
        Both qualitative and quantitative research through surveys, interviews
        and secondary research were conducted to gain insights into what
        challenges the students face.
      </p>

      <h3 className="font-display text-3xl">Key findings</h3>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col">
          <ul className="list-disc px-3 text-xl">
            <li>
              85% of students submit assignments on time, but 73.4% do so just
              before the deadline, indicating last-minute stress management.{" "}
            </li>
            <li>66.7% have difficulty maintaining focus during studies.</li>
            <li>61.3% struggle with managing multiple tasks at once. </li>
            <li>57.7% experience high stress before deadlines. </li>
            <li>64% feel mentally exhausted after completing assignments.</li>
          </ul>

          <p>
            Based on this research we created Alex - The overwhelmed student who
            struggles with procrastination, distractions and last minute stress.
            What Alex needs to succeed and feel better is clear task breakdowns
            with visual reminders, progress tracker to stay motivated and on
            track and motivational prompts to encourage early actions.
          </p>
        </div>

        <div className="flex flex-col max-w-56">
          <img
            src={Avatar}
            alt="A bright orange avatar representing the neutral persona 'Alex'"
            className="max-w-40"
          />
          <h4 className="font-display">Alex</h4>
          <p className="font-medium">"Student"</p>
          <p>
            "I need clear instructions and reminders to stay on track.
            Otherwise, I easily get stressed and postpone tasks until the last
            minute."
          </p>
        </div>
      </div>

      <img
        src={UserJourney}
        alt="Visual timeline of a student named Alex managing a two-week assignment. Despite expectations to start early and submit high-quality work, Alex procrastinates due to stress and competing tasks. The journey is shown in four stages: receiving the assignment, trying to start early, last-minute work and submission, and post-deadline reflection. Key pain points include feeling overwhelmed, lack of time, and mixed feelings after submission."
        className="w-full"
      />

      <h3 className="font-display text-4xl">Prototyping</h3>
      <p>
        With a user-centered approach we followed an iterative design process
        gradually refining our interface based on user feedback.
      </p>

      <h3 className="font-display text-3xl">Key features</h3>
      <ul className="px-3 list-disc text-xl">
        <li>Progress tracker with visual indication to boost motivation</li>
        <li>Customizable notifications encouring our users to stay on track</li>
        <li>
          Distraction-free mode muting notifications and external distractions
        </li>
        <li>
          Dashboard overview to provide a clear, high-level view of assignments
          and deadlines
        </li>
      </ul>

      <h3 className="font-display text-3xl">Design choices</h3>
      <p>
        Choosing a minimalistic approach with structured interface was vital to
        ensure ease of use while maintaining a motivational and engaging
        experience. The neutral colorscheme with strategic pops of color
        highlights progress while ensuring readability through a clean font. The
        rounded UI elements creates a softer and more inviting feel.{" "}
      </p>
      <p>
        After usability tests we altered the design through progress markers and
        step by step tracking for clearer visual guidance, moved the
        motivational quotes from the dashboard to the loading screens instead.
        We also reduced the amount of text and added inline guidance for
        clarity.
      </p>

      <div className="flex flex-col md:flex-row max-w-[300px] md:max-w-[800px]">
        <img
          src={WireframesOne}
          alt="Three smartphones displaying wireframes of the app Fokus: Dashboard and landingpage, log in page and assignment breakdown-page"
          className="max-w-[300px] md:max-w-[400px]"
        />
        <img
          src={WireframesTwo}
          alt="Two smartphones displaying mockups of the app Fokus: Dashboard and welcome-page as well as the uploading-page for assignments."
          className="max-w-[300px] md:max-w-[400px]"
        />
      </div>

      <h3 className="font-display text-3xl">Key take aways</h3>
      <p>
        Students who tested the prototype felt more in control of their studies.
        Positive feedback confirmed that structured planning and visual progress
        tracking increased motivation and reduced stress. Research is crucial,
        we wouldn't have managed with this result if we've neglected the chance
        to understand our users. There is a great balance with structure and
        simplicity, too much complexity will overwhelm the users which is why
        the minimalistic approach suited this app. Lastly: Motivation needs to
        feel natural. Users responded better to subtle encouragement rather than
        intrusive motivational elements.
      </p>

      <h3 className="font-display text-3xl">Future development</h3>
      <p>
        Fokus was an exciting project built on a strong accessibility
        perspective. The combination of research, thoughtful UI, and unique AI
        functionality resulted in a tool that not only genuinely helps students
        organize their studies but also promotes healthier habits and mental
        well-being. In the future, I see this app evolving to become even more
        personalized, integrating social learning through community features and
        refining the UI design to ensure full WCAG 2.2 compliance.
      </p>
    </section>
  );
};

export default Fokus;
