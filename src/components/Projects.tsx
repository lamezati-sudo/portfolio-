import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import ProjectCard from './projects/ProjectCard';
import ProjectSection from './projects/ProjectSection';
import { personalProjects, academicProjects } from './projects/projectsData';

const Projects = () => (
  <section id="projects" className="section work-section" aria-labelledby="projects-heading">
    <div className="page-width">
      <div className="section-heading">
        <div><p className="section-kicker mono">01 / SELECTED WORK</p><h2 id="projects-heading">Ideas, made real<span>.</span></h2></div>
        <p>Independent projects at the intersection<br className="desktop-break" /> of useful software and curious engineering.</p>
      </div>
      <div className="featured-projects">
        {personalProjects.filter(project => project.imageUrl).map(project => <ProjectCard key={project.id} {...project} />)}
      </div>
      <article className="security-feature">
        <div className="security-icon"><ShieldCheck size={27} strokeWidth={1.5} /></div>
        <div className="security-copy">
          <p className="mono">AI SECURITY / JUNE 2026</p>
          <h3>On the other side of the prompt.</h3>
          <p>Competed as <strong>“Divine Fox”</strong> in Cisco and World Wide Technology’s AI Defense CTF, exploring prompt injection, jailbreaks, multi-turn attacks, and poisoned RAG documents against live GenAI systems.</p>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="text-link" target="_blank" rel="noopener noreferrer">More in my resume <ArrowUpRight size={16} /></a>
        </div>
        <div className="security-stats"><div><strong>48<span>h</span></strong><span>of hands-on challenges</span></div><div><strong>16</strong><span>attack categories</span></div></div>
      </article>
      <ProjectSection title="Also in the toolkit" projects={[...personalProjects.filter(project => !project.imageUrl), ...academicProjects]} message="Academic repositories are shared on request to respect NC State’s academic integrity policies." />
    </div>
  </section>
);
export default Projects;
