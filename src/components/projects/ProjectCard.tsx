import { ArrowUpRight, Check, Github } from 'lucide-react';
import type { Project } from './projectsData';
import CadGallery from './CadGallery';

const ProjectCard = ({ id, number, title, category, period, description, detail, impact, technologies, imageUrl, imageAlt, githubUrl, externalUrl, linkLabel, requestAccess }: Project) => {
  const compact = !imageUrl;
  const href = requestAccess ? '#contact' : (externalUrl || githubUrl);
  return (
    <article id={`project-${id}`} className={`project-card ${compact ? 'project-card--compact' : ''} project-card--${id}`}>
      {imageUrl && (
        <div className={`project-visual project-visual--${id}`}>
          <div className="project-visual-top mono">
            {id === 'hooly' ? <span className="hooly-brand"><img src={`${import.meta.env.BASE_URL}images/hooly-icon.png`} alt="" width="26" height="26" /> HOOLY AI</span> : <span>REFERENCE → PARAMETRIC MODEL</span>}
            <span>{id === 'hooly' ? 'ANDROID' : 'EXPERIMENT / 001'}</span>
          </div>
          {id === 'cad' ? <CadGallery /> : <div className="project-image-wrap">
            <img className="project-image" src={imageUrl} alt={imageAlt} loading="lazy" decoding="async" width={id === 'hooly' ? 811 : 800} height={id === 'hooly' ? 1440 : 427} />
          </div>}
          {id === 'cad' ? (
            <div className="cad-workflow">
              <p className="mono">REFERENCE + MY CAD DESIGNS / 5 IMAGES</p>
              <div><span>Reference</span><span aria-hidden="true">→</span><span>Parametric part</span><span aria-hidden="true">→</span><span><Check size={13} /> Review</span></div>
            </div>
          ) : <span className="project-image-note mono">OFFICIAL GOOGLE PLAY PREVIEW</span>}
        </div>
      )}
      <div className="project-content">
        <div className="project-meta mono"><span>{number} / {category}</span><span>{period}</span></div>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        {detail && <p className="project-detail">{detail}</p>}
        {impact && <p className="project-impact"><span aria-hidden="true">↳</span> {impact}</p>}
        <ul className="technology-list" aria-label={`Technologies used in ${title}`}>
          {technologies.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        {href && (
          <a href={href} className="text-link project-link" {...(!requestAccess ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {githubUrl && <Github size={16} />}{linkLabel || 'View project'}<ArrowUpRight size={17} />
          </a>
        )}
      </div>
    </article>
  );
};
export default ProjectCard;
