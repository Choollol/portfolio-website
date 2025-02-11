import OverviewPage from "@/pages/OverviewPages/OverviewPage/OverviewPage"
import { getPlaceholderPageSummaries } from "@/utils/PageUtils"

const GamesOverviewPage = () => {
  return (
    <OverviewPage title="Games" pageSummaries={getPlaceholderPageSummaries(3)} />
  )
}

export default GamesOverviewPage