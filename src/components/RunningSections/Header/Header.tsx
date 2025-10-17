import {
  CONTACT_PAGE_PATH,
  GAMES_PAGE_PATH,
  LINKS_PAGE_PATH,
  PROJECTS_PAGE_PATH,
} from "@/utils/PageUtils";
import HeaderPageLink from "./HeaderPageLink/HeaderPageLink";
import HomePageLink from "./HomePageLink/HomePageLink";
import { AppBar, Stack } from "@mui/material";
import { createStyles } from "@/styles/Styling";

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
  return (
    <AppBar position="static" sx={styles.headerContainer}>
      <Stack direction="row">
        <HomePageLink />
      </Stack>

      <Stack direction="row">
        <HeaderPageLink targetPagePath={GAMES_PAGE_PATH}>Games</HeaderPageLink>

        <HeaderPageLink targetPagePath={PROJECTS_PAGE_PATH}>
          Projects
        </HeaderPageLink>

        <HeaderPageLink targetPagePath={LINKS_PAGE_PATH}>Links</HeaderPageLink>

        <HeaderPageLink targetPagePath={CONTACT_PAGE_PATH}>
          Contact
        </HeaderPageLink>
      </Stack>
    </AppBar>
  );
};

export default Header;
