import { mergeStyles, StyleProps } from "@/styles/styling";
import { Box } from "@mui/material";
import MuiImage from "mui-image";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof MuiImage> &
  ComponentProps<typeof Box> & {
    disableAntialiasing?: boolean;
  };

const Image = ({ disableAntialiasing = false, ...remainingProps }: Props) => {
  const styles = mergeStyles((remainingProps.sx as StyleProps) ?? {}, {
    ...(disableAntialiasing && { imageRendering: "pixelated" }),
  });
  return (
    <Box
      component={MuiImage}
      {...remainingProps}
      showLoading
      duration={1000}
      sx={styles}
    />
  );
};

export default Image;
