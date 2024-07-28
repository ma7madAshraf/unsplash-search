import React from "react";
import { useAppContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDark, toggleIsDark } = useAppContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleIsDark}>
        {isDark ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
