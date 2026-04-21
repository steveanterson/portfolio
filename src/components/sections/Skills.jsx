import { motion } from "framer-motion";
import { skillsData } from "../../data/portfolioData";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle 
          title="Technical Arsenal" 
          subtitle="Tools and technologies I use to architect robust solutions."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, idx) => (
            <GlassCard 
              key={skill.name} 
              delay={idx * 0.1}
              className="flex flex-col items-center justify-center p-8 text-center border-t-purple-500/30 border-t-2"
            >
              <div className="w-16 h-16 rounded-full bg-purple-600/10 border border-purple-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <span className="text-xl font-bold text-white">{skill.level}%</span>
              </div>
              <h4 className="text-white font-medium">{skill.name}</h4>
              <div className="w-full bg-white/5 h-1.5 rounded-full mt-4 overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
