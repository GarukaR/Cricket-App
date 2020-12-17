import { GiAxeSwing } from "react-icons/gi";

const NavLogo = () => (
  <div className="hover:text-white">
    <a href="Home" className="flex flex-row space-x-1">
      <GiAxeSwing className="text-4xl"/>
      <h1 className="font-bold text-4xl">
          HKU
      </h1>
      <h5 className="text-2xl self-center">
          Cricket
      </h5>
    </a>
  </div>
);

export default NavLogo;
