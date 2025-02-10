import { LINKS_PAGE_PATH_ABS } from "@/utils/PagePaths";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <Link to={LINKS_PAGE_PATH_ABS}>Links</Link>
      <div>Home</div>
    </>
  );
};

export default HomePage;
