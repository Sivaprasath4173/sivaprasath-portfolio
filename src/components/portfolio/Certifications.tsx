import * as React from 'react';
import { Award, ExternalLink, ShieldCheck, GraduationCap } from 'lucide-react';
const certifications = [
    {
        title: 'Generative AI',
        organization: 'Analytics Vidhya',
        date: '2024',
        icon: ShieldCheck,
        description: 'Specialized training in Generative AI models and applications.',
        link: 'https://drive.google.com/drive/folders/1IBC68EvVOdrssqUG3QejvNBPILUW_WdB?usp=share_link',
    },
    {
        title: 'Python',
        organization: 'IBM & ByteXL',
        date: '2023',
        icon: GraduationCap,
        description: 'Comprehensive certification in Python programming for data analysis.',
        link: 'https://drive.google.com/drive/folders/1IBC68EvVOdrssqUG3QejvNBPILUW_WdB?usp=share_link',
    },
    {
        title: 'Grade I Keyboard Distinction',
        organization: 'Annamalai University, Tamil Nadu',
        date: '2022',
        icon: Award,
        description: 'Achieved Distinction in Music Theory and Practical Keyboard Performance.',
        link: 'https://drive.google.com/drive/folders/1IBC68EvVOdrssqUG3QejvNBPILUW_WdB?usp=share_link',
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16 scroll-reveal">
                    <h2 className="section-title mb-4">
                        Professional <span>Certifications</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Continuous learning and skill validation through industry-recognized certifications.
                    </p>
                    <div className="w-20 h-1 bg-primary mt-6 rounded-full shadow-glow-sm" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.title}
                            className="card-glass p-8 rounded-2xl group relative scroll-reveal overflow-hidden"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* Background Glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />

                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <cert.icon size={28} />
                                </div>
                            </div>

                            <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-primary/80 font-medium text-sm mb-4">
                                {cert.organization}
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {cert.description}
                            </p>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                            >
                                View Certificate
                                <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
