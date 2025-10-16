import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const PageContentContainer = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default PageContentContainer;
