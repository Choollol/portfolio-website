import useIsScreenSmall from "@/hooks/useIsScreenSmall";
import { createStyles, mergeStyles } from "@/styles/styling";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  normalMaxWidthPercent?: number;
}

const styles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0px",
    padding: 0,
  },
});

const PageBody = ({ children, normalMaxWidthPercent = 70 }: Props) => {
  const isScreenSmall = useIsScreenSmall();

  const containerStyles = mergeStyles(styles.container, {
    maxWidth: isScreenSmall ? "90%" : `${normalMaxWidthPercent}%`,
  });

  return <Box sx={containerStyles}>{children}</Box>;
};

export default PageBody;
