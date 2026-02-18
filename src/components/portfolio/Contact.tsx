import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'Sivaprasath4173@gmail.com', href: 'mailto:Sivaprasath4173@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/SivaprasathC', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/Sivaprasath4173', href: 'https://github.com/Sivaprasath4173' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title mb-4">
            Get In <span>Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm open to internships, collaborations, and exciting learning opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="scroll-reveal">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Let's <span className="glow-text">connect</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a project idea, want to collaborate on something cool, or just want
              to chat about technology — I'm always open to new conversations. Drop me a message
              and I'll get back to you as soon as possible!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'hsl(0 100% 50% / 0.08)',
                        border: '1px solid hsl(0 100% 50% / 0.2)',
                        boxShadow: '0 0 0 transparent',
                      }}
                    >
                      <Icon size={18} className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(0_100%_50%/0.8)]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-display uppercase tracking-widest">{link.label}</p>
                      <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors duration-300">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="card-glass glow-border rounded-2xl p-8 scroll-reveal">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:ring-1"
                  style={{
                    background: 'hsl(0 0% 9%)',
                    border: '1px solid hsl(0 0% 16%)',
                    '--tw-ring-color': 'hsl(0 100% 50% / 0.5)',
                  } as React.CSSProperties}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(0 100% 50% / 0.5)';
                    e.target.style.boxShadow = '0 0 12px hsl(0 100% 50% / 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(0 0% 16%)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300"
                  style={{
                    background: 'hsl(0 0% 9%)',
                    border: '1px solid hsl(0 0% 16%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(0 100% 50% / 0.5)';
                    e.target.style.boxShadow = '0 0 12px hsl(0 100% 50% / 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(0 0% 16%)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Siva, I'd love to collaborate on..."
                  className="w-full px-4 py-3 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'hsl(0 0% 9%)',
                    border: '1px solid hsl(0 0% 16%)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(0 100% 50% / 0.5)';
                    e.target.style.boxShadow = '0 0 12px hsl(0 100% 50% / 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(0 0% 16%)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>

              {sent && (
                <p className="text-center text-sm text-primary animate-fade-up">
                  Thanks! I'll get back to you soon 🚀
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
