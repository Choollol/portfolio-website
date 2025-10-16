import { linksData } from "@/data/page-data/links-page-data";
import PageTitle from "@/pages/Common/PageTitle";
import PageContentContainer from "@/pages/Common/PageContainer";
import SectionTitle from "@/pages/Common/SectionTitle";
import { createStyles } from "@/styles/Styling";
import { Link, Typography } from "@mui/material";

const styles = createStyles({
  text: {
    fontSize: "1.2em",
    textAlign: "center",
    margin: "40px 0px",
    "& .MuiLink-root": {
      textDecoration: "underline",
    },
  },
});

const LinksPage = () => {
  return (
    <>
      <PageTitle text="Links" />
      {linksData.map((linksSectionData, index) => {
        return (
          <PageContentContainer key={index}>
            <SectionTitle text={linksSectionData.title} />
            {linksSectionData.text.map((text, index) => {
              return (
                <Typography variant="body1" sx={styles.text} key={index}>
                  {text.doShowLink ? (
                    <>
                      {text.label}:&nbsp;
                      <Link href={text.url}>{text.url}</Link>
                    </>
                  ) : (
                    <Link href={text.url}>{text.label}</Link>
                  )}
                </Typography>
              );
            })}
          </PageContentContainer>
        );
      })}
    </>
  );
};

export default LinksPage;
