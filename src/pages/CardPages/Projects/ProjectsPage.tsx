import { projectCards } from "@/data/page-data/projects-page-data";
import CardPage from "@/pages/CardPages/CardPage/CardPage";

const ProjectsPage = () => {
  return (
    <CardPage pageTitle="Projects" cards={projectCards} />
  );
};

export default ProjectsPage;
