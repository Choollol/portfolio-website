import { ICONS_PATH, ImageInfo } from "@/utils/imageUtils";

type LinksSectionData = {
  title: string;
  body: {
    imageInfo: ImageInfo;
    label: string;
    url: string;
  }[];
};

export const linksData: LinksSectionData[] = [
  {
    title: "Profiles",
    body: [
      {
        imageInfo: { imagePath: `${ICONS_PATH}/Itch_Logo.png` },
        label: "Itch.io",
        url: "https://choollol.itch.io/",
      },
      {
        imageInfo: { imagePath: `${ICONS_PATH}/Github_Logo.png` },
        label: "GitHub",
        url: "https://github.com/Choollol/",
      },
      {
        imageInfo: { imagePath: `${ICONS_PATH}/Linkedin_Logo.png` },
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/christopher-sun1",
      },
    ],
  },
  {
    title: "Documentation",
    body: [
      {
        imageInfo: { imagePath: `${ICONS_PATH}/Unity_Logo.png` },
        label: "Unity Messenger System",
        url: "https://docs.google.com/document/d/1JoiURcQxYknvDlhJPOnOCaJGMLsFv32iPlezUkGKPaY/edit?usp=sharing",
      },
    ],
  },
];
