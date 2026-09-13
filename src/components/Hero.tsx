import { ArrowDown, ArrowDownRight, ArrowUpRight, FileText, MapPin, Terminal } from 'lucide-react';
import CadWorkbench from './projects/CadWorkbench';

const Hero = () => (
  <section id="home" className="hero" aria-labelledby="hero-heading">
    <div className="page-width">
      <div className="hero-topline mono">
        <span>Software developer / Cybersecurity student</span>
        <span className="hero-location"><MapPin size={14} /> Raleigh, North Carolina</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">Hey, I’m Leonel.</p>
          <h1 id="hero-heading">Curious mind.<br /><span>Practical builder.</span></h1>
          <p className="hero-description">I turn ideas into software people use. From AI-powered keyboards to CAD copilots, I build with a focus on usability, privacy, and what’s possible next.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-accent">Explore my work <ArrowDownRight size={18} /></a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="button button-ghost"><FileText size={17} /> View resume <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-affiliation"><span className="affiliation-mark">NC</span><span>Computer Science at NC State<span className="affiliation-detail">Cybersecurity concentration · Class of 2027</span></span></div>
        </div>
        <aside className="builder-card" aria-label="A look at my current CAD experiment">
          <div className="builder-card-header"><span className="mono">ON MY WORKBENCH</span><Terminal size={18} /></div>
          <div className="builder-core">
            <span className="builder-index mono">01 / AI + ENGINEERING</span>
            <CadWorkbench />
          </div>
          <div className="builder-focus">
            <span className="mono">FROM IMAGE TO EDITABLE GEOMETRY</span>
            <a href="#project-cad">AI-native CAD assistant <ArrowUpRight size={19} /></a>
          </div>
          <div className="builder-bottom mono"><span>REFERENCE → MODEL → REVIEW</span><span>2026</span></div>
        </aside>
      </div>
      <div className="hero-bottom">
        <div className="hero-facts">
          <div><strong>850</strong><span>Hooly users</span></div>
          <div><strong>500+</strong><span>users supported at NC State</span></div>
          <div><strong>3.7</strong><span>GPA · Computer Science</span></div>
        </div>
        <a href="#projects" className="scroll-cue mono">SCROLL TO EXPLORE <ArrowDown size={17} /></a>
      </div>
    </div>
  </section>
);
export default Hero;
