import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(navLinks[i].label);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-2xl tracking-tight"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home', 'Home'); }}
        >
          <span className="glow-text">Siva</span>
          <span className="text-foreground">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.label); }}
                className={`nav-link text-sm ${active === link.label ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Sivaprasath4173"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(0_100%_50%/0.8)]"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/SivaprasathC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(0_100%_50%/0.8)]"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.label); }}
                  className={`nav-link text-sm ${active === link.label ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-4 pt-2">
              <a href="https://github.com/Sivaprasath4173" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/SivaprasathC" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
