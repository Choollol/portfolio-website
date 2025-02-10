import HomePage from "@/pages/Home/HomePage";
import { Route, Routes } from "react-router";
import Header from "@/components/RunningSections/Header/Header";
import LinksPage from "@/pages/Links/LinksPage";
import { HOME_PAGE_PATH_ABS, LINKS_PAGE_PATH_ABS } from "@/utils/PagePaths";
import Footer from "@/components/RunningSections/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/">
          <Route path={HOME_PAGE_PATH_ABS} element={<HomePage />} />
          <Route path={LINKS_PAGE_PATH_ABS} element={<LinksPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
