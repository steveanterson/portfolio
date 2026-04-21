import { experienceData } from "../../data/portfolioData";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Experience" 
        />
        
        <div className="space-y-8 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />
          
          {experienceData.map((exp, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="relative ml-8 md:ml-16 p-8">
              <div className="absolute left-[-36px] md:left-[-68px] top-8 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.8)] border-4 border-black" />
              
              <span className="text-purple-400 font-mono text-sm mb-2 block">{exp.year}</span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
              <p className="text-gray-500 leading-relaxed">
                {exp.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
