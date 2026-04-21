import { motion } from "framer-motion";
import { siteContent } from "../../data/portfolioData";

export const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-24 h-24 rounded-full purple-glow-box bg-purple-900/20 mb-8 flex items-center justify-center"
      >
        <span className="text-4xl font-bold text-white glow-text">
          {siteContent.hero.name.charAt(0)}
        </span>
      </motion.div>
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={onComplete}
          className="h-full bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.8)]"
        />
      </div>
    </motion.div>
  );
};
