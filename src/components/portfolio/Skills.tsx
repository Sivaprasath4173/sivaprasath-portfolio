const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'Next.js', level: 85 },
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Tools & AI',
    icon: '🛠️',
    skills: [
      { name: 'Langchain', level: 75 },
      { name: 'MongoDB', level: 82 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const techBadges = [
  'Python', 'Next.js', 'React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS',
  'Tailwind CSS', 'Langchain', 'MongoDB', 'Express.js', 'MySQL', 'Git', 'GitHub',
  'Analytical Thinking', 'Teamwork', 'Time Management', 'VS Code',
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title mb-4">
            My <span>Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Technologies and tools I work with daily to bring ideas to life.
          </p>
        </div>

        {/* Skill Groups with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="card-glass glow-border rounded-2xl p-6 scroll-reveal"
              style={{ transitionDelay: `${gi * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-foreground text-sm">{group.category}</h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-display font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: 'hsl(0 0% 15%)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000 relative overflow-hidden"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, hsl(0 100% 40%), hsl(0 100% 55%))',
                          boxShadow: '0 0 8px hsl(0 100% 50% / 0.5)',
                        }}
                      >
                        <div
                          className="absolute inset-0 animate-pulse"
                          style={{ background: 'linear-gradient(90deg, transparent, hsl(0 100% 70% / 0.3), transparent)' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="scroll-reveal">
          <p className="text-center text-muted-foreground text-sm font-display uppercase tracking-widest mb-6">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <span
                key={badge}
                className="skill-badge px-4 py-2 rounded-lg text-sm cursor-default"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
