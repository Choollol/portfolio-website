import HomePage from "@/pages/Home/HomePage";
import { Route, Routes } from "react-router";
import Header from "@/components/RunningSections/Header/Header";
import LinksPage from "@/pages/Links/LinksPage";
import { CONTACT_PAGE_PATH, GAMES_PAGE_PATH, HOME_PAGE_PATH, LINKS_PAGE_PATH, PROJECTS_PAGE_PATH } from "@/utils/PageUtils";
import Footer from "@/components/RunningSections/Footer/Footer";
import GamesOverviewPage from "@/pages/OverviewPages/GamesOverviewPage";
import ProjectsPage from "@/pages/CardPages/Projects/ProjectsPage";
import ContactPage from "@/pages/Contact/ContactPage";

function App() {
  return (
    <>
      <Header />

      <div className="page-body">
        <Routes>
          <Route path="/">
            <Route path={HOME_PAGE_PATH} element={<HomePage />} />
            <Route path={GAMES_PAGE_PATH} element={<GamesOverviewPage />} />
            <Route path={PROJECTS_PAGE_PATH} element={<ProjectsPage />} />
            <Route path={LINKS_PAGE_PATH} element={<LinksPage />} />
            <Route path={CONTACT_PAGE_PATH} element={<ContactPage />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
