import useIsScreenSmall from "@/hooks/useIsScreenSmall";
import { createStyles, mergeStyles } from "@/styles/styling";
import { Container } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const styles = createStyles({
  container: {
    margin: "20px 0px",
    padding: 0,
  },
});

const PageBody = ({ children }: Props) => {
  const isScreenSmall = useIsScreenSmall();

  const containerStyles = mergeStyles(styles.container, {
    maxWidth: isScreenSmall ? "100%" : "70%",
  });

  return <Container sx={containerStyles}>{children}</Container>;
};

export default PageBody;
