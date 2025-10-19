import { projectCards } from "@/data/page-data/projects-page-data";
import CardPage from "@/components/pages/card-pages/CardPage";

const ProjectsPage = () => {
  return <CardPage pageTitle="Projects" cards={projectCards} />;
};

export default ProjectsPage;
