import PageSummary from "@/components/PageSummary/PageSummary";
import { PageSummaryInfo } from "@/utils/pageUtils";
import PageContentContainer from "@/pages/Common/PageContainer";
import PageTitle from "@/pages/Common/PageTitle";
import PageBody from "@/pages/Common/PageBody";

interface Props {
  title: string;
  pageSummaries: PageSummaryInfo[];
}

const OverviewPage = ({ title, pageSummaries }: Props) => {
  return (
    <PageBody>
      <PageTitle text={title} />
      <PageContentContainer>
        {pageSummaries.map((pageSummaryInfo, index) => {
          return <PageSummary key={index} {...pageSummaryInfo} />;
        })}
      </PageContentContainer>
    </PageBody>
  );
};

export default OverviewPage;
