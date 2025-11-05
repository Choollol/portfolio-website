import { createStyles } from "@/styles/styling";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const styles = createStyles({
  container: {
    position: "absolute",
    width: "100vw",
    height: "100%",
    clipPath: "inset(0 0 0 0)",
    pointerEvents: "none",
  },
});

const BackgroundContainer = ({ children }: Props) => {
  return <Box sx={styles.container}>{children}</Box>;
};

export default BackgroundContainer;
