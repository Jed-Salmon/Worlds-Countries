import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(nextTheme);
    localStorage.setItem("data-theme", nextTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      🌙 Dark Mode
    </button>
  );
};

export default ThemeToggler;
