import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Let’s Connect</h2>
      <p className="contact-subtext">
        Have a project or message? Drop a note below or reach out via links!
      </p>

      {submitted ? (
        <p className="success-message">✅ Your message has been sent. Thank you!</p>
      ) : (
        <form
          action="https://formspree.io/f/xyzjrzoa" // Replace this
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}

      <div className="contact-links">
  <div className="contact-link-item">
    <FaEnvelope className="icon" />
    <a href="mailto:rohan@example.com">rohan@example.com</a>
  </div>
  <div className="contact-link-item">
    <FaGithub className="icon" />
    <a href="https://github.com/rohan123" target="_blank" rel="noopener noreferrer">
      github.com/rohan123
    </a>
  </div>
  <div className="contact-link-item">
    <FaLinkedin className="icon" />
    <a href="https://linkedin.com/in/rohan-profile" target="_blank" rel="noopener noreferrer">
      linkedin.com/in/rohan-profile
    </a>
  </div>
</div>


      <hr className="footer-separator" />
<footer className="dark-footer">
  <p>© {new Date().getFullYear()} Rohan Shah. Built with 💙 using React.</p>
</footer>

    </section>
  );
}
