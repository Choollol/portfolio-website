import { ReactNode } from "react";

type LinksSectionData = {
  title: string;
  text: ReactNode[];
};

export const linksData: LinksSectionData[] = [
  {
    title: "Social Media",
    text: [
      <>
        Itch.io:&nbsp;
        <a href="https://choollol.itch.io/">https://choollol.itch.io/</a>
      </>,

      <>
        GitHub:&nbsp;
        <a href="https://github.com/Choollol/">https://github.com/Choollol/</a>
      </>,

      <>
        Linkedin:&nbsp;
        <a href="https://www.linkedin.com/in/christopher-sun1">
          https://www.linkedin.com/in/christopher-sun1
        </a>
      </>,
    ],
  },
  {
    title: "Documentation",
    text: [
      <>
        <a href="https://docs.google.com/document/d/1JoiURcQxYknvDlhJPOnOCaJGMLsFv32iPlezUkGKPaY/edit?usp=sharing">
          Unity Messenger System
        </a>
      </>,
    ],
  },
];
