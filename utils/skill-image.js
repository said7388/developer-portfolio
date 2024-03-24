import css from "/public/svg/skills/css.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import materialui from "/public/svg/skills/materialui.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import react from "/public/svg/skills/react.svg";
import selenium from "/public/svg/skills/selenium.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import vitejs from "/public/svg/skills/vitejs.svg";
import nodejs from "/public/svg/skills/node.svg";
import nestjs from "/public/svg/skills/nestjs.svg";
import postgresql from "/public/svg/skills/postgresql.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "node js":
      return nodejs;
    case "typescript":
      return typescript;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "selenium":
      return selenium;
    case "nest js":
      return nestjs;
    default:
      break;
  }
};
