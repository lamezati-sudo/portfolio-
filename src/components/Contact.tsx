import { ArrowDownRight } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact = () => (
  <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
    <div className="page-width contact-layout">
      <div className="contact-copy">
        <p className="section-kicker mono">05 / GET IN TOUCH</p>
        <h2 id="contact-heading">Good things start<br />with a conversation<span>.</span></h2>
        <p>Have a project in mind, an opportunity to share, or a question about my work? I’d love to hear from you.</p>
        <ContactInfo />
        <ArrowDownRight className="contact-arrow" size={76} strokeWidth={1} aria-hidden="true" />
      </div>
      <div className="contact-form-panel">
        <div className="contact-form-heading"><h3>Let’s make a connection.</h3><span className="mono">SAY HELLO</span></div>
        <ContactForm />
      </div>
    </div>
  </section>
);
export default Contact;
