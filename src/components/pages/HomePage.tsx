import AlternatingSection from "@/components/AlternatingSection";
import * as homePageData from "@/data/page-data/home-page-data";
import PageBody from "@/components/common/PageBody";
import { createStyles } from "@/styles/styling";
import { Box, Container, Typography } from "@mui/material";

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
});

const HomePage = () => {
  return (
    <PageBody>
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
