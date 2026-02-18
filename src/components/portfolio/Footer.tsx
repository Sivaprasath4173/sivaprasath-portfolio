import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-display font-bold text-xl">
            <span className="glow-text">Siva</span>
            <span className="text-foreground">.</span>
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap justify-center">
            {[
              { label: 'Home', href: 'home' },
              { label: 'About', href: 'about' },
              { label: 'Projects', href: 'projects' },
              { label: 'Skills', href: 'skills' },
              { label: 'Certificates', href: 'certifications' },
              { label: 'Contact', href: 'contact' }
            ].map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/Sivaprasath4173' },
              { icon: Linkedin, href: 'https://linkedin.com/in/SivaprasathC' },
              { icon: Mail, href: 'mailto:Sivaprasath4173@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(0_100%_50%/0.8)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="divider-glow my-6" />

        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} <span className="text-primary font-medium">Sivaprasath C</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
