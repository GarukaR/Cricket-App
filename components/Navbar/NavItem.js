import { useState } from "react";

const NavItem = (props) => {
  const [state, setState] = useState(false);

  const toggleHover = () => setState(!state);

  return (
    <div
      style={{ borderBottom: state && "solid 1px black" }}
      className="container font-semibold text-white text-xs sm:text-sm md:text-base place-self-center uppercase"
    >
      <li>
        <a
          onMouseOver={toggleHover}
          onMouseOut={toggleHover}
          href="https://www.w3schools.com"
        >
          {props.itemName}
        </a>
      </li>
    </div>
  );
};

export default NavItem;
