import HomePage from "@/components/pages/HomePage";
import { Route, Routes } from "react-router";
import Header from "@/components/running-sections/Header";
import LinksPage from "@/components/pages/LinksPage";
import {
  CONTACT_PAGE_PATH,
  GAMES_PAGE_PATH,
  HOME_PAGE_PATH,
  LINKS_PAGE_PATH,
  PROJECTS_PAGE_PATH,
} from "@/utils/pageUtils";
import Footer from "@/components/running-sections/Footer";
import GamesOverviewPage from "@/components/pages/GamesOverviewPage";
import ProjectsPage from "@/components/pages/card-pages/ProjectsPage";
import ContactPage from "@/components/pages/ContactPage";
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
