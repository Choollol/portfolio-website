import { createStyles } from "@/styles/styling";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const styles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

const PageContentContainer = ({ children }: Props) => {
  return <Box sx={styles.container}>{children}</Box>;
};

export default PageContentContainer;
