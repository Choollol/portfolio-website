import { LinkCardInfo } from "@/utils/LinkCardUtils";
import { Container, Link, Typography } from "@mui/material";
import { createStyles } from "@/styles/Styling";

const styles = createStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    "&.MuiContainer-root": {
      margin: 0,
      padding: 0,
    },
  },
  linkCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px",
    height: "100%",
    padding: "20px 20px",
    border: "1px solid white",
    borderRadius: "5px",
    boxShadow: "2px 5px 5px hsl(0, 0%, 0%, 20%)",
    backgroundColor:
      "color-mix(in hsl, var(--site-background-color), black 10%)",
    transition: "background-color 0.2s",
    "&::hover": {
      backgroundColor:
        "color-mix(in hsl, var(--site-background-color), black 4%)",
    },
  },
  cardTitle: {
    marginBottom: "20px",
  },
  cardText: {
    display: "inline-block",
    textAlign: "center",
  },
});

const LinkCard = ({ title, text, targetUrl }: LinkCardInfo) => {
  return (
    <Container sx={styles.cardContainer}>
      <Link href={targetUrl} sx={styles.linkCard}>
        <Typography variant="h5" sx={styles.cardTitle}>
          {title}
        </Typography>
        <Typography variant="body1" sx={styles.cardText}>
          {text}
        </Typography>
      </Link>
    </Container>
  );
};

export default LinkCard;
