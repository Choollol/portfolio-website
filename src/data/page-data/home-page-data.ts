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
        interests. Some programming languages I know are TypeScript/JavaScript,
        C#, C++, C, Python, and Java. I'm also working on personal and
        collaborative projects to apply and improve my skills in my own time.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/Typescript_Logo.png`,
        },
        {
          imagePath: `${ICONS_PATH}/CPP_Logo.png`,
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
        I'm part of a team of 13 that is developing
        [AntAlmanac](https://antalmanac.com/), a web application used by over
        16,000 UCI students for scheduling classes. It's a project that's part
        of the ICSSC (Information and Computer Sciences Student Council) that is
        built with TypeScript, React, Next.js, and many other technologies.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/AntAlmanac_Logo.png`,
          imageSize: ImageSize.SMALL,
        },
        {
          imagePath: `${ICONS_PATH}/ICSSC_Logo.png`,
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

export const backgroundText = `\
import AlternatingSection from "@/components/AlternatingSection";
import * as homePageData from "@/data/page-data/home-page-data";
import PageBody from "@/components/PageBody";
import { createStyles } from "@/styles/styling";
import { Box, Container, Typography } from "@mui/material";
import useNormalizedScrollPosition from "@/hooks/useNormalizedScrollPosition";
import HighlightedCode from "@/components/HighlightedCode";
import BackgroundContainer from "@/components/BackgroundContainer";

const styles = createStyles({
  websiteTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "100px",
  },
  websiteSubheading: {
    marginTop: "20px",
  },
  backgroundCode: {
    position: "fixed",
    left: 20,
    top: 10,
    opacity: 0.1,
  },
});

const HomePage = () => {
  const normalizedScrollPos = useNormalizedScrollPosition();
  const backgroundCode = homePageData.backgroundText.substring(
    0,
    homePageData.backgroundText.length * normalizedScrollPos
  );
  return (
    <PageBody>
      <BackgroundContainer>
        <HighlightedCode code={backgroundCode} sx={styles.backgroundCode} />
      </BackgroundContainer>
      <Container sx={styles.websiteTitleContainer}>
        <Typography variant="h2">Christopher Sun</Typography>
        <Typography variant="h4" sx={styles.websiteSubheading}>
          Portfolio Website
        </Typography>
      </Container>

      <Box>
        <AlternatingSection {...homePageData.introductionData} />
        <AlternatingSection {...homePageData.currentProjectsData} />
      </Box>
    </PageBody>
  );
};

export default HomePage;
`;
