import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const ContactInfo = () => (
  <div className="contact-info">
    <a href="mailto:lamezati@ncsu.edu" className="contact-email">lamezati@ncsu.edu <ArrowUpRight size={20} /></a>
    <div className="contact-socials">
      <a href="https://www.linkedin.com/in/leonelmezatio/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
      <a href="https://github.com/lamezati-sudo" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={14} /></a>
    </div>
    <p className="contact-location mono">BASED IN RALEIGH, NORTH CAROLINA</p>
  </div>
);
export default ContactInfo;
