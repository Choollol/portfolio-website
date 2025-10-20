import { LinkCardInfo } from "@/utils/linkCardUtils";
import LinkCard from "@/components/LinkCard";
import PageTitle from "@/components/PageTitle";
import { createStyles } from "@/styles/styling";
import { Grid } from "@mui/material";
import PageBody from "@/components/PageBody";
import useIsScreenSmall from "@/hooks/useIsScreenSmall";

interface Props {
  pageTitle: string;
  cards: LinkCardInfo[];
}

const styles = createStyles({
  cardsContainer: {
    margin: "40px 0px",
    justifyContent: "center",
  },
  cardGridItem: (isScreenSmall: boolean) => ({
    justifyContent: "center",
    justifyItems: "center",
    aspectRatio: isScreenSmall ? "auto" : "4/5",
  }),
});

const CardPage = ({ pageTitle, cards }: Props) => {
  const isScreenSmall = useIsScreenSmall();

  return (
    <PageBody>
      <PageTitle text={pageTitle} />
      <Grid
        container
        columnSpacing={1}
        rowSpacing={4}
        sx={styles.cardsContainer}
      >
        {cards.map((cardInfo, index) => {
          return (
            <Grid key={index} sx={styles.cardGridItem(isScreenSmall)}>
              <LinkCard {...cardInfo} />
            </Grid>
          );
        })}
      </Grid>
    </PageBody>
  );
};

export default CardPage;
