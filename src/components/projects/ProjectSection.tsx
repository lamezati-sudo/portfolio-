import ProjectCard from './ProjectCard';
import type { Project } from './projectsData';

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  message?: string;
}

const ProjectSection = ({ title, projects, message }: ProjectSectionProps) => (
  <div className="additional-projects">
    <h3 className="eyebrow">{title}</h3>
    <div className="additional-projects-grid">
      {projects.map(project => <ProjectCard key={project.id} {...project} />)}
    </div>
    {message && <p className="project-access-note">{message} <a href="#contact">Get in touch <span aria-hidden="true">↗</span></a></p>}
  </div>
);
export default ProjectSection;
