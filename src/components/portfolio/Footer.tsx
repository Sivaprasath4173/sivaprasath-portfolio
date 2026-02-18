import { Github, Linkedin, Mail, Heart } from 'lucide-react';

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
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:siva@example.com' },
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

        <p className="text-center text-muted-foreground text-sm flex items-center justify-center gap-1.5">
          Made with <Heart size={14} className="text-primary fill-primary animate-pulse" /> by{' '}
          <span className="text-primary font-medium">Siva</span>
          <span className="mx-1">·</span>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
