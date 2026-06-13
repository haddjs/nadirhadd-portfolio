import { getProjects } from "@/lib/api";
import Projects from "../Projects";

const ProjectSection = async () => {
  const projects = await getProjects();
  return <Projects projects={projects} />;
};

export default ProjectSection;
