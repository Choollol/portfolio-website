import { LinkCardInfo } from "@/utils/linkCardUtils";
import { Container, Link, Typography } from "@mui/material";
import { createStyles } from "@/styles/styling";
import MarkdownText from "@/components/common/MarkdownText";

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
    textAlign: "center",
    border: "1px solid white",
    borderRadius: "5px",
    boxShadow: "2px 5px 5px hsl(0, 0%, 0%, 20%)",
    backgroundColor: "hsla(0, 0%, 0%, 0.1)",
    transition: "background-color 0.2s",
  },
  cardTitle: {
    marginBottom: "20px",
  },
});

const LinkCard = ({ title, text, targetUrl }: LinkCardInfo) => {
  return (
    <Container sx={styles.cardContainer}>
      <Link href={targetUrl} sx={styles.linkCard}>
        <Typography variant="h5" sx={styles.cardTitle}>
          {title}
        </Typography>
        <MarkdownText>{text}</MarkdownText>
      </Link>
    </Container>
  );
};

export default LinkCard;
