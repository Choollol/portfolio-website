type LinksSectionData = {
  title: string;
  text: {
    label: string;
    url: string;
    doShowLink?: boolean;
  }[];
};

export const linksData: LinksSectionData[] = [
  {
    title: "Profiles",
    text: [
      {
        label: "Itch.io",
        url: "https://choollol.itch.io/",
        doShowLink: true,
      },
      {
        label: "GitHub",
        url: "https://github.com/Choollol/",
        doShowLink: true,
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/christopher-sun1",
        doShowLink: true,
      },
    ],
  },
  {
    title: "Documentation",
    text: [
      {
        label: "Unity Messenger System",
        url: "https://docs.google.com/document/d/1JoiURcQxYknvDlhJPOnOCaJGMLsFv32iPlezUkGKPaY/edit?usp=sharing",
      },
    ],
  },
];
