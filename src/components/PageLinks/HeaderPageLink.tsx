import { Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router";
import { createStyles } from "@/styles/styling";

interface Props {
  children: ReactNode;
  targetPagePath: string;
}

const styles = createStyles({
  pageLink: {
    padding: "0px 10px",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "1.1em",
  },
});

const HeaderPageLink = ({ children, targetPagePath }: Props) => {
  return (
    <Link component={RouterLink} to={targetPagePath} sx={styles.pageLink}>
      <Typography variant="body1" sx={styles.text}>
        {children}
      </Typography>
    </Link>
  );
};

export default HeaderPageLink;
