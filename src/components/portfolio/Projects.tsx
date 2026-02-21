import { ExternalLink, Github } from 'lucide-react';
import resumeCraftImg from '@/assets/resume_craft.png';
import qrMagicImg from '@/assets/qr_magic_studio.png';

const projects = [
  {
    title: 'QR Magic Studio',
    description:
      'A next-generation AI-powered QR code generator with advanced creative styling, styling options, and premium SaaS dashboard features.',
    image: qrMagicImg,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'SaaS'],
    demo: 'https://qr-magic-studio.vercel.app',
    github: 'https://github.com/Sivaprasath4173/qr-magic-studio',
  },
  {
    title: 'Resume Craft',
    description:
      'AI-Powered Resume Builder: Create ATS-friendly, professional resumes with real-time AI assistance, drag-and-drop customization, and instant PDF export.',
    image: resumeCraftImg,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'AI Assistance'],
    demo: 'https://resume-craft-red-theta.vercel.app',
    github: 'https://github.com/Sivaprasath4173/Resume-Craft',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title mb-4">
            My <span>Projects</span>
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 12px hsl(var(--primary) / 0.8)' }} />
          <p className="text-muted-foreground max-w-md mx-auto">
            A collection of projects that showcase my skills and passion for building great products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group card-glass rounded-2xl overflow-hidden scroll-reveal cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 5% / 0.9))' }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-display font-medium"
                      style={{
                        background: 'hsl(0 100% 50% / 0.1)',
                        border: '1px solid hsl(0 100% 50% / 0.2)',
                        color: 'hsl(0 100% 65%)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm flex-1 justify-center"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn-outline flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm flex-1 justify-center"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
};

export default Projects;
