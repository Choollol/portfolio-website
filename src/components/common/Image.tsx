import { Box } from "@mui/material";
import MuiImage from "mui-image";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof MuiImage> & ComponentProps<typeof Box>;

const Image = (props: Props) => {
  return <Box component={MuiImage} {...props} duration={1000} />;
};

export default Image;
