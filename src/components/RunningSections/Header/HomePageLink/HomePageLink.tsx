import styles from "./HomePageLink.module.css";
import { HOME_PAGE_PATH } from "@/utils/PageUtils";
import { Link } from "react-router";

const HomePageLink = () => {
  return (
    <div>
      <Link to={HOME_PAGE_PATH} className={styles["home-button"]}>Home</Link>
    </div>
  )
}

export default HomePageLink