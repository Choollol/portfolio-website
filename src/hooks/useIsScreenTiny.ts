import { useMediaQuery, useTheme } from "@mui/material";

const useIsScreenTiny = () => {
  const theme = useTheme();
  const isScreenTiny = useMediaQuery(theme.breakpoints.down("sm"));
  return isScreenTiny;
}

export default useIsScreenTiny;
