import dayjs from "dayjs";
import styles from "./Footer.module.css";
import lastUpdatedDateData from "@/data/last-updated-date.json";

const Footer = () => {
  const date = dayjs(
    new Date(
      lastUpdatedDateData.year,
      lastUpdatedDateData.month - 1, // -1 because months are 0-indexed
    )
  );
  const lastUpdatedDate: string = date.format("MMMM YYYY");

  return (
    <footer className={styles["footer-container"]}>
      Last updated: {lastUpdatedDate}
    </footer>
  );
};

export default Footer;
