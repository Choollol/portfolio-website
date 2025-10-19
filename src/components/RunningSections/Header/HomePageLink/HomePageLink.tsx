import { createStyles } from "@/styles/styling";
import { HOME_PAGE_PATH } from "@/utils/pageUtils";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

const styles = createStyles({
  text: {
    fontWeight: 600,
    fontSize: "1.5em",
  },
});

const HomePageLink = () => {
  return (
    <Link component={RouterLink} to={HOME_PAGE_PATH}>
      <Typography variant="body1" sx={styles.text}>
        Home
      </Typography>
    </Link>
  );
};

export default HomePageLink;
