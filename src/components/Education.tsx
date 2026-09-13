import { ArrowUpRight, GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="section about-section" aria-labelledby="about-heading">
    <div className="page-width about-layout">
      <div className="about-copy">
        <p className="section-kicker mono">04 / A LITTLE ABOUT ME</p>
        <h2 id="about-heading">Always learning.<br />Usually building<span>.</span></h2>
        <p>I’m Leonel, a Computer Science student at NC State with a concentration in cybersecurity. I’m drawn to the place where building software meets understanding how it can break.</p>
        <p>That curiosity takes me from shipping Android apps to experimenting with AI agents, parametric CAD, and security challenges. I like turning what I learn into something useful.</p>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="text-link">The full story, in my resume <ArrowUpRight size={17} /></a>
      </div>
      <div className="education-card">
        <div className="education-top"><GraduationCap size={23} strokeWidth={1.5} /><span className="mono">EDUCATION</span></div>
        <div className="education-school"><img src={`${import.meta.env.BASE_URL}ncstate-logo.png`} alt="" width="52" height="52" loading="lazy" /><h3>North Carolina<br />State University</h3></div>
        <p className="education-degree">B.S. in Computer Science</p>
        <p className="education-concentration">Cybersecurity concentration</p>
        <div className="education-metrics"><div><strong>3.7</strong><span>GPA</span></div><div><strong>May 2027</strong><span>Expected graduation</span></div></div>
        <p className="deans-list"><span>Dean’s List</span> Fall 2024 · Spring 2026</p>
        <div className="coursework"><span className="mono">CURRENT FOUNDATIONS</span><p>Computer & network security · Operating systems · Data structures & algorithms · Software engineering · Artificial intelligence</p></div>
      </div>
    </div>
  </section>
);
export default Education;
