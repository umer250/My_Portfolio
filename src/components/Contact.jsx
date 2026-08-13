import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Share2 } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { contactInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(contactInfo.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const socialConnections = [
    {
      icon: FaLinkedin,
      label: "Let's Connect",
      platform: "on LinkedIn",
      href: contactInfo.linkedin,
      color: '#0077b5',
    },
    {
      icon: FaGithub,
      label: "Let's Connect",
      platform: "on GitHub",
      href: socialLinks.github,
      color: '#333',
    },
    {
      icon: FaFacebook,
      label: "Let's Connect",
      platform: "on Facebook",
      href: socialLinks.facebook || '#',
      color: '#1877f2',
    },
    {
      icon: FaWhatsapp,
      label: "Let's Connect",
      platform: "on WhatsApp",
      href: contactInfo.whatsapp,
      color: '#25d366',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            Have any questions? Feel free to ask or connect with me!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
              >
                Get in Touch
              </h3>
              <Share2 size={24} style={{ color: 'var(--accent)' }} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <User
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--text-muted)' }}
                />
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input-field pl-12"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--text-muted)' }}
                />
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input-field pl-12"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <MessageSquare
                  size={20}
                  className="absolute left-4 top-6"
                  style={{ color: 'var(--text-muted)' }}
                />
                <textarea
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="input-field pl-12 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center text-lg"
                style={{ opacity: status === 'loading' ? 0.7 : 1 }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-center" style={{ color: 'var(--green)' }}>
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-center" style={{ color: '#ef4444' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right: Connect Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              Connect With Me
            </h3>

            <div className="space-y-4">
              {socialConnections.map((social, i) => (
                <motion.a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="card p-4 flex items-center gap-4 group cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${social.color}15, transparent)`,
                    borderColor: `${social.color}30`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: social.color,
                      color: '#fff',
                    }}
                  >
                    <social.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p
                      className="font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {social.label}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {social.platform}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
