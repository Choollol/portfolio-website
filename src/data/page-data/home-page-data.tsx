import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/AlternatingSectionUtils";
import { ImageSize } from "@/utils/ImageUtils";
import cppLogo from "@/assets/images/icons/CPP_Logo.png";
import reactLogo from "@/assets/images/icons/React_Logo.png";
import unityLogo from "@/assets/images/icons/Unity_Logo.png";
import csharpLogo from "@/assets/images/icons/CSharp_Logo.png";
import minecraftLogo from "@/assets/images/icons/Minecraft_Logo.webp";
import javaLogo from "@/assets/images/icons/Java_Logo.png";

export const introductionData: AlternatingSectionInfo = {
  title: "Introduction",
  info: [
    {
      text: (
        <>
          I'm Christopher Sun, a second-year Computer Science major at UC
          Irvine. I am passionate about software development, especially game
          development, though I have a wide variety of coding interests. Some
          programming languages I know are C#, C, C++, Java, Python, and
          JavaScript/TypeScript. I have been programming for a little over three
          years, and I'm also coding personal projects in my own time.
        </>
      ),
      imageInfo: [
        {
          imagePath: cppLogo,
        },
        {
          imagePath: reactLogo,
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
      text: (
        <>
          I'm currently acting as lead programmer for a game-development team
          that is using Unity3D and C#. We are developing a narrative-driven
          story game with branching dialogue system. Some other features I have
          added are an NPC scheduling system, an easy-to-use internal voice
          lines system, and an interactable-object system.
        </>
      ),
      imageInfo: [
        {
          imagePath: unityLogo,
          imageSize: ImageSize.SMALL,
        },
        {
          imagePath: csharpLogo,
          imageSize: ImageSize.SMALL,
        },
      ],
    },
    {
      text: (
        <>
          I'm also a Research Assistant at the{" "}
          <a href="https://sleepinpediatrics.com/">
            Sleep, Learning, and Emotion in Pediatrics (SLEEP) Lab
          </a>
          &nbsp;here at UC Irvine. I am aiding in the development of their
          MindCycle mobile app, created with Unity, to help collect data. I am
          also developing Minecraft plugins in Java for the lab to help test
          spatial awareness and memory.
        </>
      ),
      imageInfo: [
        {
          imagePath: minecraftLogo,
          imageSize: ImageSize.SMALL,
        },
        {
          imagePath: javaLogo,
          imageSize: ImageSize.SMALL,
        },
      ],
    },
  ],
};
