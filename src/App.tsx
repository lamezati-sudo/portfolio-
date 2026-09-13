import { ArrowUp, Github, Linkedin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { useTimeOfDayTheme } from './hooks/useTimeOfDayTheme';

function App() {
  useTimeOfDayTheme();

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a href="#home" className="wordmark" aria-label="Leonel Mezatio, back to top">lm<span>.</span></a>
          <p>© {new Date().getFullYear()} Leonel Mezatio</p>
          <div className="footer-links">
            <a href="https://github.com/lamezati-sudo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/leonelmezatio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#home" className="back-top">Back to top <ArrowUp size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
