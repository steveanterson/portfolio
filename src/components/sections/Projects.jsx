import { projectsData } from "../../data/portfolioData";
import { GlassCard } from "../ui/GlassCard";
import { SectionTitle } from "../ui/SectionTitle";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Featured Work" 
          subtitle="A selection of my recent projects exploring modern design and robust architecture."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <GlassCard key={project.id} delay={idx * 0.1} className="flex flex-col h-full group p-6">
              <div className="h-48 rounded-xl bg-purple-900/20 mb-6 flex items-center justify-center overflow-hidden relative border border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                 <span className="text-purple-400 font-bold text-6xl z-20 opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
                   {project.title.charAt(0)}
                 </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/20">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
