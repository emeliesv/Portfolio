import type { JSX } from "react";
import Nav from "./Nav";

const Header = (): JSX.Element => {
  return (
    <header className="flex">
      <Nav />
    </header>
  );
};

export default Header;
