import {
  GAMES_PAGE_PATH_ABS,
  LINKS_PAGE_PATH_ABS,
  PROJECTS_PAGE_PATH_ABS,
} from "@/utils/PagePaths";
import styles from "./Header.module.css";
import HeaderPageLink from "./HeaderPageLink/HeaderPageLink";
import HomePageLink from "./HomePageLink/HomePageLink";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-left-section"]}>
        <HomePageLink />
      </div>

      <div className={styles["header-right-section"]}>
        <HeaderPageLink targetPagePath={GAMES_PAGE_PATH_ABS}>
          Games
        </HeaderPageLink>

        <HeaderPageLink targetPagePath={PROJECTS_PAGE_PATH_ABS}>
          Projects
        </HeaderPageLink>

        <HeaderPageLink targetPagePath={LINKS_PAGE_PATH_ABS}>
          Links
        </HeaderPageLink>
      </div>
    </div>
  );
};

export default Header;
