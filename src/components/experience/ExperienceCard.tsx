interface ExperienceCardProps {
  title: string;
  company: string;
  department: string;
  period: string;
  location: string;
  description: string[];
  logoUrl: string;
  tags: string[];
}

const ExperienceCard = ({ title, company, department, period, location, description, logoUrl, tags }: ExperienceCardProps) => (
  <article className="experience-row">
    <div className="experience-company">
      <img src={logoUrl} alt="" className="company-logo" width="48" height="48" loading="lazy" />
      <div><h3>{company}</h3><p>{department}</p><span className="mono">{location}</span></div>
    </div>
    <div className="experience-content">
      <div className="experience-title"><h4>{title}</h4><span className="mono">{period}</span></div>
      <ul className="experience-description">{description.map(item => <li key={item}>{item}</li>)}</ul>
      <ul className="experience-tags">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </div>
  </article>
);
export default ExperienceCard;
