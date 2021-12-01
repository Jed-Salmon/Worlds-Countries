import ThemeToggler from "./ThemeToggler";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>Where in the world?</h1>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Navbar;
