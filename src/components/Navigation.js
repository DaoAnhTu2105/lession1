import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Navigation = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul>
          <li>
            <a
              className="active"
              href="#home"
              style={{
                color: theme.color,
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#news"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
            >
              Contact
            </a>
          </li>
          <li></li>
        </ul>
        <div style={{ position: "relative" }}>
          <a
            className="switch-mode"
            href="/#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
              textDecoration: "none",
              position: "absolute",
              top: -30,
              right: 30,
            }}
            data-testId="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
