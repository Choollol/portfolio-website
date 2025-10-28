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
