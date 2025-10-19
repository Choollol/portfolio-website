import dayjs from "dayjs";
import lastUpdatedDateData from "@/data/last-updated-date.json";
import { createStyles } from "@/styles/styling";
import { BottomNavigation, Typography } from "@mui/material";

const styles = createStyles({
  footerContainer: {
    display: "block",
    backgroundColor: "hsla(0, 0%, 0%, 0)",
    color: "inherit",
    textAlign: "center",
    fontSize: "80%",
    paddingTop: "30px",
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
    <BottomNavigation sx={styles.footerContainer}>
      <Typography>Last updated: {lastUpdatedDate}</Typography>
    </BottomNavigation>
  );
};

export default Footer;
