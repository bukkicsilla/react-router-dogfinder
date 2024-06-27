import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
  const links = dogs.map((dog) => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ));
  console.log(links);
  return (
    <nav>
      <NavLink to="/dogs">Home</NavLink>
      {links}
    </nav>
  );
}
export default NavBar;
