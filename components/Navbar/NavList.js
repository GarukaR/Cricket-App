const NavList = (props) => (
  <div className="place-self-center">
    <ul className="flex flex-row space-x-5">{props.children}</ul>
  </div>
);

export default NavList;
