import { LinkCardInfo } from "@/utils/LinkCardUtils";
import LinkCard from "@/components/LinkCard/LinkCard";
import PageTitle from "@/pages/Common/PageTitle";
import { createStyles } from "@/styles/Styling";
import { Grid } from "@mui/material";

interface Props {
  pageTitle: string;
  cards: LinkCardInfo[];
}

const styles = createStyles({
  cardsContainer: {
    margin: "40px 0px",
    maxWidth: "80%",
    justifyContent: "center",
  },
  cardGridItem: {
    justifyContent: "center",
    justifyItems: "center",
    marign: 0,
    padding: 0,
  },
});

const CardPage = ({ pageTitle, cards }: Props) => {
  return (
    <>
      <PageTitle text={pageTitle} />
      <Grid container rowSpacing={4} sx={styles.cardsContainer}>
        {cards.map((cardInfo, index) => {
          return (
            <Grid size={{ lg: 4, md: 6, sm: 12 }} sx={styles.cardGridItem}>
              <LinkCard key={index} {...cardInfo} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardPage;
