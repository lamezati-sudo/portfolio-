import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Toolkit' },
  { href: '#education', label: 'About' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 800) setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <nav className="page-width navigation" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setIsMenuOpen(false)} aria-label="Leonel Mezatio, home">
          <span className="wordmark">lm<span>.</span></span>
          <span className="brand-name">Leonel Mezatio</span>
        </a>
        <div className="desktop-navigation">
          {links.map(({ href, label }) => (
            <a key={href} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined}>{label}</a>
          ))}
        </div>
        <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={16} /></a>
        <button ref={menuButton} className="menu-toggle" type="button" aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {isMenuOpen && (
          <div className="mobile-navigation" id="mobile-navigation">
            {[...links, { href: '#contact', label: 'Let’s talk' }].map(({ href, label }, index) => (
              <a key={href} href={href} onClick={() => setIsMenuOpen(false)} aria-current={activeSection === href.slice(1) ? 'location' : undefined}>
                <span className="mono">0{index + 1}</span>{label}<ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
