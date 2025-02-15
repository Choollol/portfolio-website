import PageSummary from "@/components/PageSummary/PageSummary";
import styles from "./OverviewPage.module.css";
import pageStyles from "@/pages/Pages.module.css";
import { PageSummaryInfo } from "@/utils/PageUtils";

interface Props {
  title: string;
  pageSummaries: PageSummaryInfo[];
}

const OverviewPage = ({ title, pageSummaries }: Props) => {
  return (
    <>
      <h1 className={pageStyles["page-title"]}>{title}</h1>
      <div
        className={`${pageStyles["page-content-container"]} ${styles["page-summary-list-container"]}`}
      >
        {pageSummaries.map((pageSummaryInfo, index) => {
          return (
            <PageSummary
              key={index}
              {...pageSummaryInfo}
            />
          );
        })}
      </div>
    </>
  );
};

export default OverviewPage;
