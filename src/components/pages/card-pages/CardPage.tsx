import { LinkCardInfo } from "@/utils/linkCardUtils";
import LinkCard from "@/components/LinkCard";
import PageTitle from "@/components/common/PageTitle";
import { createStyles } from "@/styles/styling";
import { Grid } from "@mui/material";
import PageBody from "@/components/common/PageBody";

interface Props {
  pageTitle: string;
  cards: LinkCardInfo[];
}

const styles = createStyles({
  cardsContainer: {
    margin: "40px 0px",
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
    <PageBody normalMaxWidthPercent={80}>
      <PageTitle text={pageTitle} />
      <Grid
        container
        columnSpacing={1}
        rowSpacing={4}
        sx={styles.cardsContainer}
      >
        {cards.map((cardInfo, index) => {
          return (
            <Grid
              key={index}
              size={{ sm: 12, md: 6, lg: 4, xl: 3 }}
              sx={styles.cardGridItem}
            >
              <LinkCard {...cardInfo} />
            </Grid>
          );
        })}
      </Grid>
    </PageBody>
  );
};

export default CardPage;
