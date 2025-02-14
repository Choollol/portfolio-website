import { Link } from "react-router";
import styles from "./PageSummary.module.css";

interface Props {
  imagePath: string;
  text: string;
  pagePath: string;
}

/**
 * A page section with a thumbnail and short summary paragraph
 */
const PageSummary = ({ imagePath, text, pagePath }: Props) => {
  return (
    <Link to={pagePath} className={styles["page-summary-container"]}>
      <img className={styles["page-summary-image"]} src={imagePath} />
      <p className={styles["page-summary-text"]}>{text}</p>
    </Link>
  );
};

export default PageSummary;
