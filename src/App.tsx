import HomePage from "@/pages/Home/HomePage";
import { Route, Routes } from "react-router";
import Header from "@/components/RunningSections/Header/Header";
import LinksPage from "@/pages/Links/LinksPage";
import { GAMES_PAGE_PATH_ABS, HOME_PAGE_PATH_ABS, LINKS_PAGE_PATH_ABS } from "@/utils/PageUtils";
import Footer from "@/components/RunningSections/Footer/Footer";
import GamesOverviewPage from "@/pages/OverviewPages/GamesOverviewPage";

function App() {
  return (
    <>
      <Header />

      <div className="page-body">
        <Routes>
          <Route path="/">
            <Route path={HOME_PAGE_PATH_ABS} element={<HomePage />} />
            <Route path={GAMES_PAGE_PATH_ABS} element={<GamesOverviewPage />} />
            <Route path={LINKS_PAGE_PATH_ABS} element={<LinksPage />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
