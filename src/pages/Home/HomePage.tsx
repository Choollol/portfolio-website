import AlternatingSection from "@/components/AlternatingSection/AlternatingSection";
import * as homePageData from "@/data/page-data/home-page-data";
import { createStyles } from "@/styles/styling";
import { Box, Container, Typography } from "@mui/material";

const styles = createStyles({
  homePageContainer: {
    maxWidth: "70%",
    margin: "20px",
  },
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
});

const HomePage = () => {
  return (
    <Container sx={styles.homePageContainer}>
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
    </Container>
  );
};

export default HomePage;
