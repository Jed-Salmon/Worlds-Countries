import ThemeToggler from "./ThemeToggler";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Navbar;
