import { Link } from "react-router";
import styles from "./PageSummary.module.css";
import { PageSummaryInfo } from "@/utils/PageUtils";

/**
 * A page section with a thumbnail and short summary paragraph
 */
const PageSummary = ({
  imageInfo,
  title,
  text,
  targetUrl,
}: PageSummaryInfo) => {
  let image =
    imageInfo.imagePath != "" ? (
      <img className={styles["page-summary-image"]} src={imageInfo.imagePath} />
    ) : (
      <div className={styles["page-summary-no-image-text"]}>No Image</div>
    );
  return (
    <Link to={targetUrl}>
      <p className={styles["page-summary-title"]}>{title}</p>
      <div className={styles["page-summary-container"]}>
        {image}
        <div className={styles["page-summary-text"]}>{text}</div>
      </div>
    </Link>
  );
};

export default PageSummary;
