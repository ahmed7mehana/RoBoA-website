import uiUxOne from "./assets/ui-ux-project-one.svg";
import uiUxTwo from "./assets/ui-ux-project-two.svg";
import uiUxThree from "./assets/ui-ux-project-three.svg";
import webOne from "./assets/web-project-one.jpeg";
import webTwo from "./assets/web-project-two.jpeg";
import webThree from "./assets/web-project-three.jpeg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  V: number;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "app",
    img: uiUxThree,
    title: "RoBoA",
    V:1
  }
];
