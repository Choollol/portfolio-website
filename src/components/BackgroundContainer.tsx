import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BackgroundContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100%",
        clipPath: "inset(0 0 0 0)",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundContainer;
