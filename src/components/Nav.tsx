import type { JSX } from "react";
import { NavLink } from "react-router";

const Nav = (): JSX.Element => {
  return (
    <nav className="flex w-full justify-end">
      <ul className="flex gap-2.5 ">
        <li>
          <NavLink
            to="/"
            aria-label="Go to Home-page"
            className="font-display text-4xl hover:text-brand-secondary active:bg-brand active:text-brand-secondary hover:bg-brand p-2 focus-visible:outline-2 focus-visible:outline-brand-secondary"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            aria-label="Learn more about Emelie"
            className={({ isActive }) =>
              `font-display text-4xl hover:text-brand-secondary ${
                isActive ? "bg-brand text-brand-secondary" : ""
              } hover:bg-brand p-2 focus-visible:outline-2 focus-visible:outline-brand-secondary`
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            aria-label="See Emelies work"
            className={({ isActive }) =>
              `font-display text-4xl hover:text-brand-secondary ${
                isActive ? "bg-brand text-brand-secondary" : ""
              } hover:bg-brand p-2 focus-visible:outline-2 focus-visible:outline-brand-secondary`
            }
          >
            WORK
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
