import { LinkCardInfo } from "@/utils/LinkCardUtils";
import styles from "./LinkCard.module.css";
import { Link } from "react-router";

const LinkCard = ({ title, text, targetUrl }: LinkCardInfo) => {
  return (
    <Link to={targetUrl} className={styles["card-container"]}>
      <h2 className={styles["card-title"]}>{title}</h2>
      <p className={styles["card-text"]}>{text}</p>
    </Link>
  );
};

export default LinkCard;
