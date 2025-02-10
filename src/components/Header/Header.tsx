import { HOME_PAGE_PATH_ABS } from "@/utils/PagePaths"
import { Link } from "react-router"
import styles from "@/components/Header/Header.module.css"

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <Link to={HOME_PAGE_PATH_ABS} className={styles["home-button"]}>Home</Link>
    </div>
  )
}

export default Header