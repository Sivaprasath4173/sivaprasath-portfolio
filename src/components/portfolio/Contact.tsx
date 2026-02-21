import { Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'Sivaprasath4173@gmail.com', href: 'mailto:Sivaprasath4173@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/SivaprasathC', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/Sivaprasath4173', href: 'https://github.com/Sivaprasath4173' },
];

const Contact = () => {
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

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="scroll-reveal text-center">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Let's <span className="glow-text">connect</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a project idea, want to collaborate on something cool, or just want
              to chat about technology — I'm always open to new conversations. Reach out through any of
              the channels below and I'll get back to you as soon as possible!
            </p>

            <div className="flex flex-col gap-4 w-fit mx-auto text-left">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
