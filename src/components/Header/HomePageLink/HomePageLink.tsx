import styles from "@/components/Header/HomePageLink/HomePageLink.module.css";
import { HOME_PAGE_PATH_ABS } from "@/utils/PagePaths";
import { Link } from "react-router";

const HomePageLink = () => {
  return (
    <div>
      <Link to={HOME_PAGE_PATH_ABS} className={styles["home-button"]}>Home</Link>
    </div>
  )
}

export default HomePageLink