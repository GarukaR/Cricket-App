import NavLogo from "../Navbar/NavLogo";
import NavList from "../Navbar/NavList";
import NavItem from "../Navbar/NavItem";

const NavItemsList = ["Players", "Fixtures", "Series", "Videos", "News"];

const Navbar = () => (
  <div className="container w-4/5 py-4 mx-auto flex flex-col md:flex-row justify-between">
    <NavLogo />
    <NavList>
      {NavItemsList.map((ListItem) => (
        <NavItem itemName={ListItem} />
      ))}
      <button className="flex flex-row uppercase text-white font-bold bg-web3 py-3 px-5 rounded-md place-self-center hover:ring-2 hover:ring-blue-600 active:bg-green-700">
        Live
        <span className="animate-ping ml-4 w-4 h-4 bg-white rounded-full place-self-center"></span>
      </button>
    </NavList>
  </div>
);

export default Navbar;
