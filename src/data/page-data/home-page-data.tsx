import { AlternatingParagraphAlign } from "@/utils/AlternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/AlternatingSectionUtils";
import { ImageSize } from "@/utils/ImageUtils";
import cppLogo from "@/assets/images/icons/CPP_Logo.png";
import reactLogo from "@/assets/images/icons/React_Logo.png";
import unityLogo from "@/assets/images/icons/Unity_Logo.png";
import csharpLogo from "@/assets/images/icons/CSharp_Logo.png";
import minecraftLogo from "@/assets/images/icons/Minecraft_Logo.webp";
import javaLogo from "@/assets/images/icons/Java_Logo.png";

export let introductionData: AlternatingSectionInfo = {
  title: "Introduction",
  info: [
    {
      text: (
        <>
          I'm Christopher Sun, a first-year Computer Science major at UC Irvine.
          Some programming languages I know are C#, C, C++, Java, Python, and
          JavaScript/TypeScript. I have been developing games in Unity for a
          little over two years, and I'm also coding personal projects in on my
          own time. One of those projects is this website, which I am developing
          using React and Vite.
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

export let currentProjectsData: AlternatingSectionInfo = {
  title: "Current Projects",
  startingAlign: AlternatingParagraphAlign.RIGHT,
  info: [
    {
      text: (
        <>
          I'm currently acting as lead programmer for two game-development
          teams, both of which are using Unity3D and C#. One is a
          narrative-driven story game with branching dialogue system and
          numerous NPC's. The other is a first-person horror game with a
          hide-and-seek mechanic.
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
