import dayjs from "dayjs";
import lastUpdatedDateData from "@/data/last-updated-date.json";
import { createStyles } from "@/styles/styling";
import { AppBar, Typography } from "@mui/material";

const styles = createStyles({
  footerContainer: {
    backgroundColor: "hsla(0, 0%, 0%, 0)",
    color: "inherit",
    textAlign: "center",
    padding: "30px 0px",
    marginTop: "20px",
    borderTop: "1px solid hsl(0, 0%, 50%)",
  },
});

const Footer = () => {
  const date = dayjs(
    new Date(
      lastUpdatedDateData.year,
      lastUpdatedDateData.month - 1 // -1 because months are 0-indexed
    )
  );
  const lastUpdatedDate: string = date.format("MMMM YYYY");

  return (
    <AppBar position="static" sx={styles.footerContainer}>
      <Typography variant="body1">Last updated: {lastUpdatedDate}</Typography>
    </AppBar>
  );
};

export default Footer;
