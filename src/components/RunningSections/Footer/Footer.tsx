import dayjs from "dayjs";
import styles from "./Footer.module.css";
import lastUpdatedDateData from "@/data/last-updated-date.json";

const Footer = () => {
  const date = dayjs(
    new Date(
      lastUpdatedDateData.year,
      // -1 because months are 0-indexed
      lastUpdatedDateData.month - 1,
      lastUpdatedDateData.day
    )
  );
  const lastUpdatedDate: string = date.format("MMMM D, YYYY");

  return (
    <div className={styles["footer-container"]}>
      Last updated: {lastUpdatedDate}
    </div>
  );
};

export default Footer;
