import PageSummary from "@/components/PageSummary/PageSummary";
import styles from "./OverviewPage.module.css";
import pageStyles from "@/pages/Pages.module.css";
import { PageSummaryInfo } from "@/utils/PageUtils";

interface Props {
  title: string;
  pageSummaries: PageSummaryInfo[];
}

const OverviewPage = ({ title, pageSummaries }: Props) => {
  let nextId = 0;

  return (
    <>
      <h1 className={pageStyles["page-title"]}>{title}</h1>
      <div className={pageStyles["page-content-container"]}>
        {pageSummaries.map((pageSummaryInfo) => {
          return (
            <PageSummary key={nextId++}
              imagePath={pageSummaryInfo.imagePath}
              text={pageSummaryInfo.text}
              pagePath={pageSummaryInfo.pagePath}
            />
          );
        })}
      </div>
    </>
  );
};

export default OverviewPage;
