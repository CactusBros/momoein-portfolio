import ProjectCard from "./ProjectCard";
import {projectsData} from "../data/projectData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-12">
          Featured Projects
        </h2>
        <div className="space-y-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
