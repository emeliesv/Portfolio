import type { JSX } from "react";
import JenyfPreview from "/images/JenyfPreview.png?url";
import DesignDecisions from "/images/JenyfDesigndecisions.png?url";
import GitHubListOverview from "/images/jenyfgithubitems.png?url";
import GitHubProjectBoard from "/images/jenyfgithubprojects.png?url";
import JenyfLanding from "/images/JenyfLandingpage.png?url";
import JenyfProductpage from "/images/JenyfProductpage.png?url";
import JenyfCheckout from "/images/JenyfCheckout.png?url";
import { Link } from "react-router";

const Jenyf = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center max-w-[850px] gap-4">
      <Link
        to="/work"
        className="font-display text-3xl hover:text-brand hover:underline"
      >
        &lt; BACK
      </Link>

      <h2 className="font-display text-5xl bg-brand text-brand-secondary w-fit p-3 my-3">
        JENYF
      </h2>

      <div className="w-full flex justify-center m-4">
        <img
          src={JenyfPreview}
          alt="A laptop and smartphone showcases the landingpage of Jeny-site. The heading says 'Fall favourites are here' and there is an image of three persons lauging in clothes that fit well during fall-season"
          /*           className="max-w-[300px] md:max-w-[550px]" */
        />
      </div>

      <h3 className="font-display text-4xl">MY ROLE INCLUDED:</h3>
      <ul className="flex text-4xl gap-1.5 font-display flex-wrap">
        <li>UX DESIGN</li>
        <span>|</span>
        <li>LEAD DEVELOPER</li>
        <span>|</span>
        <li>REVIEW</li>
        <span>|</span>
        <li>ACCESSIBILITY</li>
      </ul>

      <p className="italic my-2.5">
        How might we create a seamless and user-friendly e-commerce experience
        while ensuring a scalable and maintable codebase using modern web
        technologies?
      </p>

      <h3 className="font-display text-4xl">Project description</h3>
      <p>
        This project is a web shop built with React (Vite), where we focused on
        responsive design, API calls, semantic code and a scalable code
        structure. We fetched products from a dummy API using async/await and
        managed the shopping cart state using React Context. The purpose of the
        project was to learn agile methodology, teambased version control and to
        creat a userf-friendly e-commerce application. We worked on the project
        for three weeks, including design in Figma, development and testing.
      </p>

      <div className="flex flex-col justify-center items-center gap-3 my-3">
        <img
          src={DesignDecisions}
          alt="Overview of design decisions for the project: the typeface 'Poppins' for all texts and 'Poppins Black' (a thicker version) used for the logo with the text 'JENYF STUDIOS'. The colorpalette includes five labeled circles: Primary (light green), primary background (off-white), neutral light (white), neutral dark (dark gray) and error (red)."
          className="w-auto h-[350px]"
        />
        <p className="italic">
          Color, fonts and tonality were decided through democratic voting
        </p>
      </div>

      <h3 className="font-display text-4xl">Technologies used</h3>
      <ul className="px-3 list-disc text-xl">
        <li>React (Vite) for a fast and modern frontend development</li>
        <li>React router for navigation</li>
        <li>React Context API for global state management</li>
        <li>Tailwind CSS for styling and responsive design</li>
        <li>Git & GitHub for version control and collaboration</li>
        <li>Netlify for deployment</li>
      </ul>

      <h4 className="font-display text-3xl">Git & GitHub</h4>
      <p>
        We used a protected main branch and a development branch. Each developer
        created feature branches named according to their assigned ticket and
        pushed them to the dev branch before merging them via a pull request.
        This workflow minimized merge conflicts and kept the codebase clean. To
        organize tasks and milestones we used GitHub projects, where we were
        able to clearly trace issues and commits to specific tickets. Pull
        requests and code reviews were conducted regurarly within the team. This
        workflow provided a realistic team experience, making us better prepared
        for professional development work.
      </p>

      <div className="flex flex-col gap-3 my-3">
        <img
          src={GitHubListOverview}
          alt="And overview of the Team items list in GitHub Projects with the items marked as 'Done'. To the left there is also a list of the assignees which are the teammembers: Evelyn Liao, Fredrika Törnkvist, Emelie Svensson, Johanna Branting and Nabila Maksud."
          className="w-full h-auto"
        />
        <img
          src={GitHubProjectBoard}
          alt="An overview of the GitHub Projectsboard with columns for 'Backlog', 'Ready', 'In progress', 'In review' and 'Done'."
          className="w-full h-auto"
        />
      </div>

      <h4 className="font-display text-3xl">Workflows and team roles</h4>
      <p>
        We worked agile with regular daily stand-ups and used the Kanban board
        in Github Projects to plan and track our tasks. My role in this was Lead
        developer and included responsibilities such as:
      </p>
      <ul className="px-3 list-disc text-xl">
        <li>Ensure code quality and adherence to best practices</li>
        <li>Code review and support resolving merge conflicts</li>
        <li>Support team members with technical challanges</li>
        <li>
          Ensure semantically correct code and that the website was accessible
        </li>
      </ul>

      <div className="flex flex-col gap-3 my-3">
        <img
          src={JenyfLanding}
          alt="Jenyf landingpage with the heading 'Hello fall' and a button that says 'Shop all products'. The background is three young people smiling, dressed in warmer clothes fit to fall season."
          className="w-full h-auto"
        />
        <img
          src={JenyfProductpage}
          alt="Overview of the Jenyf productpage - showing one backpack, one t-shirt and two jackets."
          className="w-full h-auto"
        />
        <img
          src={JenyfCheckout}
          alt="OVerview of Jenyf checkout where the shoppingcart consists of a bracelet and a blue backpack. To the right there is a form for contact details for the customer and a 'Confirm'-button."
          className="w-full h-auto"
        />
      </div>

      <h3 className="font-display text-4xl">Challenges and takeaways</h3>
      <p>
        We encountered several technical challenges but learned a lot through
        collaboration and problem-solving. One of the most challenging aspects
        was implementing the breadcrumbs navigation, as we initially struggled
        with properly updating the state and routes. We also gained a deeper
        understanding of React Context combined with React Query, which proivded
        insights into efficiently managing global data.
      </p>

      <h4 className="font-display text-3xl">Successes</h4>
      <ul className="list-disc px-3 text-xl">
        <li>
          We maintained a strong teamwork and communication through pair and mob
          programming
        </li>
        <li>
          Our approach to feature branches and pull requests ensured a
          well-structured codebase with few conflicts
        </li>
        <li>
          Our problem-solving process was effective, as we actively engaged in
          discussions and shared knowledge within the team
        </li>
      </ul>

      <h4 className="font-display text-3xl">Areas for improvement</h4>
      <ul className="px-3 list-disc text-xl">
        <li>
          More even distribution of tasks in the early stages of the project
        </li>
        <li>
          Implementing testing earlier on in the process to detect and fix bugs
          more efficiently
        </li>
      </ul>

      <h4 className="font-display text-3xl">Final thoughts</h4>
      <p>
        The project provided us with a realistic experience of working in a
        development team. We gained experience in agile methodology, code review
        and collaboration using GitHub, which makes us better prepared for
        professional work. We learned the importance of communication,
        understanding and explaining code and working iteratively to solve
        problems together. All and all, this project was a great success for me
        personally as we grew as a team and I got to grow even more as a
        developer!
      </p>
    </section>
  );
};

export default Jenyf;
