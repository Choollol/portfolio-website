import { gamesSummaryData } from "@/data/page-data/games-page-data";
import OverviewPage from "@/components/pages/OverviewPage";

const GamesOverviewPage = () => {
  return <OverviewPage title="Games" pageSummaries={gamesSummaryData} />;
};

export default GamesOverviewPage;
