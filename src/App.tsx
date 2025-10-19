import HomePage from "@/pages/Home/HomePage";
import { Route, Routes } from "react-router";
import Header from "@/components/RunningSections/Header/Header";
import LinksPage from "@/pages/Links/LinksPage";
import {
  CONTACT_PAGE_PATH,
  GAMES_PAGE_PATH,
  HOME_PAGE_PATH,
  LINKS_PAGE_PATH,
  PROJECTS_PAGE_PATH,
} from "@/utils/pageUtils";
import Footer from "@/components/RunningSections/Footer/Footer";
import GamesOverviewPage from "@/pages/OverviewPages/GamesOverviewPage";
import ProjectsPage from "@/pages/CardPages/Projects/ProjectsPage";
import ContactPage from "@/pages/Contact/ContactPage";
import { Box, GlobalStyles, ThemeProvider } from "@mui/material";
import { defaultStyle, theme } from "@/styles/defaultTheme";
import { createStyles } from "@/styles/styling";

const styles = createStyles({
  pageBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const globalStyles = <GlobalStyles styles={defaultStyle} />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}

      <Header />

      <Box sx={styles.pageBody}>
        <Routes>
          <Route path="/">
            <Route path={HOME_PAGE_PATH} element={<HomePage />} />
            <Route path={GAMES_PAGE_PATH} element={<GamesOverviewPage />} />
            <Route path={PROJECTS_PAGE_PATH} element={<ProjectsPage />} />
            <Route path={LINKS_PAGE_PATH} element={<LinksPage />} />
            <Route path={CONTACT_PAGE_PATH} element={<ContactPage />} />
          </Route>
        </Routes>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
