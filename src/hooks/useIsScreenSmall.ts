import { useMediaQuery, useTheme } from "@mui/material";

const useIsScreenSmall = () => {
  const theme = useTheme();
  const isScreenTiny = useMediaQuery(theme.breakpoints.down("md"));
  return isScreenTiny;
}

export default useIsScreenSmall;
