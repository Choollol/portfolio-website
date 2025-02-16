import {
  GAMES_PAGE_PATH,
  LINKS_PAGE_PATH,
  PROJECTS_PAGE_PATH,
} from "@/utils/PageUtils";
import styles from "./Header.module.css";
import HeaderPageLink from "./HeaderPageLink/HeaderPageLink";
import HomePageLink from "./HomePageLink/HomePageLink";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-left-section"]}>
        <HomePageLink />
      </div>

      <div className={styles["header-right-section"]}>
        <HeaderPageLink targetPagePath={GAMES_PAGE_PATH}>
          Games
        </HeaderPageLink>

        <HeaderPageLink targetPagePath={PROJECTS_PAGE_PATH}>
          Projects
        </HeaderPageLink>

        <HeaderPageLink targetPagePath={LINKS_PAGE_PATH}>
          Links
        </HeaderPageLink>
      </div>
    </header>
  );
};

export default Header;
