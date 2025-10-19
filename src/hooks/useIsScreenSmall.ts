import { useMediaQuery, useTheme } from "@mui/material";

const useIsScreenSmall = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return isScreenSmall;
}

export default useIsScreenSmall;
