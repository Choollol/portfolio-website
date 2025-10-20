import { AlternatingParagraphAlign } from "@/utils/alternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/alternatingSectionUtils";
import { ICONS_PATH, ImageSize } from "@/utils/imageUtils";
import { html } from "code-tag";

export const introductionData: AlternatingSectionInfo = {
  title: "Introduction",
  info: [
    {
      text: html`
        I'm Christopher Sun, a second-year Computer Science major at UC Irvine.
        I am passionate about software development and have been programming for
        a little over four years. Recently, I have been focused on front-end web
        development and game development, though I have a wide variety of coding
        interests. Some programming languages I know are C#, C, C++, Java,
        Python, and JavaScript/TypeScript. I'm also working on personal projects
        to apply and improve my skills in my own time.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/CPP_Logo.png`,
        },
        {
          imagePath: `${ICONS_PATH}/React_Logo.png`,
        },
      ],
    },
  ],
};

export const currentProjectsData: AlternatingSectionInfo = {
  title: "Current Projects",
  startingAlign: AlternatingParagraphAlign.RIGHT,
  info: [
    {
      text: html`
        I'm currently acting as lead programmer for a game-development team that
        is using Unity3D and C#. We are developing a narrative-driven story game
        with branching dialogue system. Some other features I have added are an
        NPC scheduling system, an easy-to-use internal voice lines system, and
        an interactable-object system.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/Unity_Logo.png`,
          imageSize: ImageSize.SMALL,
        },
        {
          imagePath: `${ICONS_PATH}/CSharp_Logo.png`,
          imageSize: ImageSize.SMALL,
        },
      ],
    },
    {
      text: html`
        I'm also a Research Assistant at the [Sleep, Learning, and Emotion in
        Pediatrics (SLEEP) Lab](https://sleepinpediatrics.com) here at UC
        Irvine. I am aiding in the development of their MindCycle mobile app,
        created with Unity, to help collect data. I am also developing Minecraft
        plugins and addons in Java and TypeScript for the lab to help test
        spatial awareness and memory.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/Minecraft_Logo.webp`,
          imageSize: ImageSize.SMALL,
        },
        {
          imagePath: `${ICONS_PATH}/Java_Logo.png`,
          imageSize: ImageSize.SMALL,
        },
      ],
    },
  ],
};
