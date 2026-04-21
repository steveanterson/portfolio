import { motion } from "framer-motion";
import { siteContent } from "../../data/portfolioData";
import { Button } from "../ui/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter } from "../../hooks/useTypewriter";
import profile from "../../assets/steve.jpeg";

export const Hero = () => {
  const { hero } = siteContent;
  const roles = ["Frontend Developer", "React Developer", "UI Enthusiast"];
  const typedRole = useTypewriter(roles, 100, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-purple-400 font-medium mb-4 tracking-wide text-lg"
            >
              {hero.greeting}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {hero.name.replace(".T", "")}<span className="text-purple-500">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-6 flex items-center h-10"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mr-2">
                {typedRole}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-[3px] h-8 bg-cyan-400 inline-block drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button as="a" href="#projects">
                View Projects
              </Button>
              <Button as="a" href="/resume.pdf" target="_blank" variant="outline">
                Download Resume
              </Button>

              <div className="flex gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                <a href="https://github.com/steveanterson" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-purple-600/30 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all text-gray-300 hover:text-white">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/steve-anterson-4218312a6" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-purple-600/30 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all text-gray-300 hover:text-white">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[400px] h-[400px]"
            >
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 shadow-[0_0_40px_rgba(147,51,234,0.2)] animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Inner glass pane simulating a profile image container */}
              <div className="absolute inset-6 rounded-full glass-card overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-black p-2 border-2 border-white/5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-600/20 to-cyan-600/20 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                  {/* Subtle placeholder icon / illustration */}
                  <img
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
