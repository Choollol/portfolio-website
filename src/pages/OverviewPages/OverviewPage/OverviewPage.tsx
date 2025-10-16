import PageSummary from "@/components/PageSummary/PageSummary";
import { PageSummaryInfo } from "@/utils/PageUtils";
import PageContentContainer from "@/pages/Common/PageContainer";
import PageTitle from "@/pages/Common/PageTitle";

interface Props {
  title: string;
  pageSummaries: PageSummaryInfo[];
}

const OverviewPage = ({ title, pageSummaries }: Props) => {
  return (
    <>
      <PageTitle text={title} />
      <PageContentContainer>
        {pageSummaries.map((pageSummaryInfo, index) => {
          return <PageSummary key={index} {...pageSummaryInfo} />;
        })}
      </PageContentContainer>
    </>
  );
};

export default OverviewPage;
