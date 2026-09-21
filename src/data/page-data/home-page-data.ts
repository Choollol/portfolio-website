import { AlternatingParagraphAlign } from "@/utils/alternatingParagraphUtils";
import { AlternatingSectionInfo } from "@/utils/alternatingSectionUtils";
import { ICONS_PATH, ImageSize } from "@/utils/imageUtils";
import { html } from "code-tag";

export const introductionData: AlternatingSectionInfo = {
  title: "Introduction",
  info: [
    {
      text: html`
        Hi, I'm Chris, a third-year Computer Science major at UC Irvine. I am
        passionate about developing usable and maintainable software and have
        recently been focused on fullstack web development, though I have a wide
        variety of technical interests. I'm also currently working on multiple
        projects to apply and improve my skills.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/Typescript_Logo.png`,
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
        I'm leading a team that is developing
        [AntAlmanac](https://antalmanac.com/), a web application used by over
        17,000 UCI students for scheduling classes. It's a project that's part
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
        I'm also working on improving [PickSome Playlist
        Maker](https://picksome-playlist-maker.vercel.app/), a website I
        developed to randomly create playlists of videos already in a user's
        YouTube library. I use YouTube for music, so this gave me a new way to
        shuffle the songs I listen to. The base app is in place and I'm now
        adding nice-to-have features like saving user preferences to a database
        and searching for videos by keywords.
      `,
      imageInfo: [
        {
          imagePath: `${ICONS_PATH}/YouTube_Logo.png`,
          imageSize: ImageSize.SMALL,
        },
        {
          imagePath: `${ICONS_PATH}/PickSome_Logo.png`,
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
