import styles from "./HomePage.module.css";
import AlternatingSection from "@/components/AlternatingSection/AlternatingSection";
import * as homePageData from "@/data/page-data/home-page-data";

const HomePage = () => {
  return (
    <>
      <div className={styles["website-title-container"]}>
        <h1 className={styles["website-heading"]}>Christopher Sun</h1>
        <h3 className={styles["website-sub-heading"]}>Portfolio Website</h3>
      </div>

      <div>
        <AlternatingSection {...homePageData.introductionData} />
        <AlternatingSection {...homePageData.currentProjectsData} />
      </div>
    </>
  );
};

export default HomePage;
