import { GraduationCap, Code2, Trophy } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    content: 'Sept 2024 – Present',
    sub: 'B.Tech IT (2nd Year) • CGPA 8.11',
    detail: 'SNS College of Engineering, Coimbatore',
  },
  {
    icon: Code2,
    title: 'Internship',
    content: 'July 2025 – Sep 2025',
    sub: 'MERN Stack Training',
    detail: 'Amypo Technologies Pvt. Ltd.',
  },
  {
    icon: Trophy,
    title: 'Interests',
    content: 'AI & Machine Learning',
    sub: 'Full Stack Development',
    detail: 'Grade I Music (Keyboard)',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title mb-4">
            About <span>Me</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get to know my background, education, and what drives me as a developer.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Profile image */}
          <div className="flex justify-center scroll-reveal">
            <div className="relative group">
              <img
                src={profileImg}
                alt="About Siva"
                className="w-72 h-72 object-cover rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  boxShadow: '0 0 40px hsl(0 100% 50% / 0.15), 0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl z-0 transition-all duration-500 group-hover:opacity-100"
                style={{
                  inset: '-4px',
                  background: 'linear-gradient(135deg, hsl(0 100% 50% / 0.3), transparent, hsl(0 100% 50% / 0.15))',
                  borderRadius: '18px',
                  opacity: 0.5,
                }}
              />
              {/* Decorative dots */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(hsl(0 100% 50%) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="scroll-reveal">
            <p className="text-primary font-display font-medium text-sm uppercase tracking-widest mb-4">
              Who I Am
            </p>
            <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
              A passionate developer &<br />
              <span className="text-gradient-red">problem solver</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Sivaprasath C</strong>, a 2nd year B.Tech Information Technology student at
                SNS College of Engineering, Coimbatore. I'm driven by curiosity and a deep passion for building things that matter.
              </p>
              <p>
                My journey began with learning Python and has evolved into full-stack web development,
                where I love turning complex problems into clean, efficient solutions. I recently completed a MERN stack training program.
              </p>
              <p>
                I'm actively seeking <strong className="text-primary">internships</strong> and{' '}
                <strong className="text-primary">collaborative projects</strong> where I can contribute
                meaningfully and grow as an engineer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Degree', value: 'B.Tech IT' },
                { label: 'Year', value: '2nd Year (2024)' },
                { label: 'Location', value: 'Coimbatore, India' },
                { label: 'Status', value: 'Open to Work ✓' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-display">{item.label}</span>
                  <span className="text-foreground font-medium mt-1">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="card-glass glow-border rounded-2xl p-6 scroll-reveal cursor-default"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'hsl(0 100% 50% / 0.1)', border: '1px solid hsl(0 100% 50% / 0.2)' }}
                  >
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">{card.title}</h4>
                </div>
                <p className="text-foreground font-medium text-sm">{card.content}</p>
                <p className="text-muted-foreground text-sm mt-1">{card.sub}</p>
                <p className="text-muted-foreground text-sm">{card.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
};

export default About;
