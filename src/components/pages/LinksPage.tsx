import { linksData } from "@/data/page-data/links-page-data";
import PageTitle from "@/components/PageTitle";
import PageContentContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import ExternalLinkSection from "@/components/ExternalLinkSection";
import PageBody from "@/components/PageBody";
import { createStyles } from "@/styles/styling";
import { Box } from "@mui/material";

const styles = createStyles({
  linkSectionContainer: {
    margin: "20px 0px",
  },
});

const LinksPage = () => {
  return (
    <PageBody>
      <PageTitle text="Links" />
      {linksData.map((linksSectionData, index) => {
        return (
          <PageContentContainer key={index}>
            <SectionTitle text={linksSectionData.title} />
            {linksSectionData.body.map((body, index) => (
              <Box key={index} sx={styles.linkSectionContainer}>
                <ExternalLinkSection
                  imagePath={body.imageInfo.imagePath}
                  label={body.label}
                  url={body.url}
                />
              </Box>
            ))}
          </PageContentContainer>
        );
      })}
    </PageBody>
  );
};

export default LinksPage;
