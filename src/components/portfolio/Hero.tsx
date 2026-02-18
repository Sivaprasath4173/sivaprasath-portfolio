import { Github, Linkedin, ChevronDown } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const techIcons = [
  { label: 'HTML', emoji: '🌐', delay: '0s', pos: 'top-8 right-8' },
  { label: 'CSS', emoji: '🎨', delay: '0.5s', pos: 'top-32 right-0' },
  { label: 'JS', emoji: '⚡', delay: '1s', pos: 'bottom-20 right-4' },
  { label: 'React', emoji: '⚛️', delay: '1.5s', pos: 'bottom-4 right-24' },
  { label: 'Python', emoji: '🐍', delay: '2s', pos: 'top-16 left-0' },
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-grid overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left - Text */}
        <div className="order-2 lg:order-1">
          <p
            className="text-primary font-display font-medium text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Welcome to my portfolio
          </p>
          <h1
            className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Hi, I'm{' '}
            <span className="glow-text">Siva</span>
          </h1>
          <h2
            className="font-display font-semibold text-xl lg:text-2xl text-primary mb-6 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Computer Science Student
            <span className="cursor-blink ml-1 text-primary">|</span>
          </h2>
          <p
            className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10 animate-fade-up"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            Passionate about web development, problem solving, and building innovative projects.
            Currently pursuing B.Tech in Computer Science, turning ideas into digital reality.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 rounded-lg text-sm"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="btn-outline px-8 py-3 rounded-lg text-sm"
            >
              Contact Me
            </button>
          </div>

          <div
            className="flex items-center gap-6 mt-10 animate-fade-up"
            style={{ animationDelay: '0.85s', opacity: 0 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(0_100%_50%/0.8)] flex items-center gap-2 text-sm">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(0_100%_50%/0.8)] flex items-center gap-2 text-sm">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="relative">
            {/* Floating tech icons */}
            {techIcons.map((icon) => (
              <div
                key={icon.label}
                className={`absolute ${icon.pos} hidden lg:flex items-center justify-center w-12 h-12 card-glass rounded-xl text-xl animate-float z-10`}
                style={{ animationDelay: icon.delay }}
                title={icon.label}
              >
                {icon.emoji}
              </div>
            ))}

            {/* Profile image container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="profile-ring-outer" />
              <div className="profile-ring" />
              {/* Spinning dashed ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"
                style={{ inset: '-40px' }}
              />
              <img
                src={profileImg}
                alt="Siva - Computer Science Student"
                className="w-full h-full object-cover rounded-full relative z-10"
                style={{
                  boxShadow: '0 0 40px hsl(0 100% 50% / 0.3)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-xs font-display tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
