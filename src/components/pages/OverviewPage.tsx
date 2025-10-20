import PageSummary from "@/components/PageSummary";
import { PageSummaryInfo } from "@/utils/pageUtils";
import PageContentContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import PageBody from "@/components/PageBody";
import { Divider } from "@mui/material";
import { createStyles } from "@/styles/styling";

interface Props {
  title: string;
  pageSummaries: PageSummaryInfo[];
}

const styles = createStyles({
  divider: {
    margin: "20px 0px",
  },
});

const OverviewPage = ({ title, pageSummaries }: Props) => {
  return (
    <PageBody>
      <PageTitle text={title} />
      <PageContentContainer>
        {pageSummaries.map((pageSummaryInfo, index) => {
          return (
            <div key={index}>
              <PageSummary {...pageSummaryInfo} />
              {index + 1 < pageSummaries.length && (
                <Divider sx={styles.divider} />
              )}
            </div>
          );
        })}
      </PageContentContainer>
    </PageBody>
  );
};

export default OverviewPage;
