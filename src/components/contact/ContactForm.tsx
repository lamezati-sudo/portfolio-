import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { sendEmail } from '../../services/emailService';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    // Preserve the original error handler; its caught value is intentionally unused.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Send Leonel a message" aria-busy={isLoading}>
      <Toaster position="top-right" toastOptions={{ style: { background: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line)' } }} />
      <div className="contact-field">
        <label htmlFor="name">Your name <span>*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Alex Morgan"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="contact-field">
        <label htmlFor="email">Email address <span>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="alex@company.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div className="contact-field contact-field-message">
        <label htmlFor="message">What’s on your mind? <span>*</span></label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, opportunity, or idea…"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="button button-accent contact-submit"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>Send message <ArrowUpRight size={18} /></>
        )}
      </button>
      <p className="form-note">All fields are required. Your message goes directly to my inbox.</p>
    </form>
  );
};

export default ContactForm;
