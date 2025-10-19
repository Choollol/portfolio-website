import {
  CONTACT_PAGE_PATH,
  GAMES_PAGE_PATH,
  LINKS_PAGE_PATH,
  PROJECTS_PAGE_PATH,
} from "@/utils/pageUtils";
import HeaderPageLink from "./HeaderPageLink/HeaderPageLink";
import HomePageLink from "./HomePageLink/HomePageLink";
import { AppBar, Stack } from "@mui/material";
import { createStyles } from "@/styles/styling";
import { useMemo } from "react";
import BasicMenu from "@/components/common/BasicMenu";
import MenuIcon from "@mui/icons-material/Menu";
import useIsScreenSmall from "@/hooks/useIsScreenSmall";

const styles = createStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "hsla(0, 0%, 0%, 0.08)",
    borderBottom: "1px solid hsl(0, 0%, 86%)",
  },
});

const Header = () => {
  const isScreenSmall = useIsScreenSmall();

  const headerPageLinks = useMemo(
    () => [
      <HeaderPageLink targetPagePath={GAMES_PAGE_PATH}>Games</HeaderPageLink>,
      <HeaderPageLink targetPagePath={PROJECTS_PAGE_PATH}>
        Projects
      </HeaderPageLink>,
      <HeaderPageLink targetPagePath={LINKS_PAGE_PATH}>Links</HeaderPageLink>,
      <HeaderPageLink targetPagePath={CONTACT_PAGE_PATH}>
        Contact
      </HeaderPageLink>,
    ],
    []
  );

  const linkMenu = (
    <BasicMenu buttonContent={<MenuIcon fontSize="large" />}>
      {...headerPageLinks}
    </BasicMenu>
  );

  const linkSpread = <Stack direction="row">{...headerPageLinks}</Stack>;

  const otherPageLinks = isScreenSmall ? linkMenu : linkSpread;

  return (
    <AppBar position="static" sx={styles.headerContainer}>
      <Stack direction="row">
        <HomePageLink />
      </Stack>

      {otherPageLinks}
    </AppBar>
  );
};

export default Header;
