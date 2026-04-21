import { motion } from "framer-motion";
import { siteContent } from "../../data/portfolioData";
import { GlassCard } from "../ui/GlassCard";
import { SectionTitle } from "../ui/SectionTitle";

export const About = () => {
  const topSkills = ["React", "Tailwind CSS", "JavaScript", "Firebase"];
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image/Illustration & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Visual Illustration */}
            <GlassCard hover={false} className="p-2 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden group rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
              <div className="w-full h-full rounded-xl bg-[#0a0a0a] flex items-center justify-center relative z-10 overflow-hidden border border-white/5">
                 
                 {/* Abstract geometric illustration representing code/tech */}
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                   className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.1)_0deg,rgba(0,0,0,0)_60deg,rgba(147,51,234,0.1)_360deg)]"
                 />
                 
                 <div className="flex flex-col items-center justify-center relative z-20 w-full h-full p-8">
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 w-full">
                     <div className="flex gap-2 mb-4">
                       <span className="w-3 h-3 rounded-full bg-red-400"></span>
                       <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                       <span className="w-3 h-3 rounded-full bg-green-400"></span>
                     </div>
                     <div className="space-y-3 font-mono text-xs sm:text-sm text-left">
                       <p className="text-purple-400">const developer = {"{"}</p>
                       <p className="text-cyan-300 pl-4">name: <span className="text-green-300">"Steve"</span>,</p>
                       <p className="text-cyan-300 pl-4">focus: <span className="text-green-300">"UI/UX"</span>,</p>
                       <p className="text-cyan-300 pl-4">passion: <span className="text-green-300">"Building amazing web experiences"</span></p>
                       <p className="text-purple-400">{"}"};</p>
                     </div>
                   </div>
                 </div>
              </div>
            </GlassCard>
            
            {/*Stats underneath the illustration */}
            <div className="grid grid-cols-2 gap-6 mt-8 max-w-md mx-auto">
              <GlassCard className="p-6 flex flex-col items-center justify-center text-center shadow-lg border-t-purple-500/30 border-t-2">
                <div className="text-4xl font-bold glow-text text-white mb-2">5+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Years Experience</div>
              </GlassCard>
              <GlassCard className="p-6 flex flex-col items-center justify-center text-center shadow-lg border-t-cyan-500/30 border-t-2">
                <div className="text-4xl font-bold glow-text text-white mb-2">30+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Projects Done</div>
              </GlassCard>
            </div>
          </motion.div>
          
          {/* Right Column: Text & Highlighted Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Frontend Developer passionate about building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-md">modern UI</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
              <p>
                {siteContent.about.text}
              </p>
              <p>
                I specialize in crafting high-performance, accessible, and visually stunning web applications. By blending clean architecture with premium design aesthetics like glassmorphism and subtle animations, I create digital experiences that leave a lasting impression.
              </p>
            </div>

            {/* Core Skills Badges */}
            <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] -mr-10 -mt-10" />
              <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-purple-500 mr-4 block shadow-[0_0_10px_rgba(147,51,234,0.8)]"></span>
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-4 relative z-10">
                {topSkills.map((skill, idx) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1), type: "spring", stiffness: 200 }}
                    className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-purple-200 text-sm font-medium hover:bg-purple-600/30 hover:border-purple-400/50 hover:text-white transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
