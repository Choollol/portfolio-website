import { gamesSummaryData } from "@/data/page-data/games-page-data"
import OverviewPage from "@/pages/OverviewPages/OverviewPage/OverviewPage"

const GamesOverviewPage = () => {
  return (
    <OverviewPage title="Games" pageSummaries={gamesSummaryData} />
  )
}

export default GamesOverviewPage