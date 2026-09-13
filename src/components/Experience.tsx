import ExperienceCard from './experience/ExperienceCard';
import { experiences } from './experience/experienceData';

const Experience = () => (
  <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
    <div className="page-width">
      <div className="section-heading">
        <div><p className="section-kicker mono">02 / EXPERIENCE</p><h2 id="experience-heading">Real people.<br />Real-world problems<span>.</span></h2></div>
        <p>Building technical depth by supporting people,<br className="desktop-break" /> improving AI, and staying hands-on.</p>
      </div>
      <div className="experience-list">{experiences.map(experience => <ExperienceCard key={experience.company} {...experience} />)}</div>
      <div className="community-note"><span className="mono">BEYOND THE DAY JOB</span><p><strong>NC State Hacking Club</strong> · Member since August 2024. Cybersecurity workshops, CTF competitions, hackathons, and campus outreach.</p></div>
    </div>
  </section>
);
export default Experience;
