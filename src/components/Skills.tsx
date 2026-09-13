import { Code2, Layers3, ShieldCheck } from 'lucide-react';

const categories = [
  { title: 'Languages', number: '01', icon: Code2, description: 'From native Android to the web.', skills: ['Kotlin', 'Python', 'TypeScript', 'Java', 'Dart', 'C', 'HTML'] },
  { title: 'Frameworks & tools', number: '02', icon: Layers3, description: 'The tools behind the things I ship.', skills: ['React', 'Flutter', 'Android Studio', 'FreeCAD', 'Firebase', 'Git', 'Linux', 'ServiceNow'] },
  { title: 'Security', number: '03', icon: ShieldCheck, description: 'A habit of asking what could go wrong.', skills: ['Network security', 'AI / LLM security', 'Threat modeling', 'Prompt injection', 'Privacy', 'CTF challenges'] },
];

const Skills = () => (
  <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
    <div className="page-width">
      <div className="section-heading">
        <div><p className="section-kicker mono">03 / THE TOOLKIT</p><h2 id="skills-heading">Built on solid foundations<span>.</span></h2></div>
      </div>
      <div className="skills-grid">
        {categories.map(({ title, number, icon: Icon, description, skills }) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-top"><Icon size={26} strokeWidth={1.5} /><span className="mono">{number}</span></div>
            <h3>{title}</h3><p>{description}</p>
            <ul className="skill-list">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default Skills;
