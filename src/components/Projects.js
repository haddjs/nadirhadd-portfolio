import ProjectCard from "./Projects/ProjectCard";

const Projects = ({ projects }) => {
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
        Projects
      </h1>

      <div className="flex my-10">
        <div className="grid grid-cols-1 w-full max-w-7xl mx-auto gap-10">
          {projects.map((items) => (
            <div key={items.id}>
              <ProjectCard items={items} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
