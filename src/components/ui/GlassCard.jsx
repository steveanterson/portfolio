import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const GlassCard = ({ children, className, delay = 0, hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, boxShadow: "0 10px 40px -10px rgba(147,51,234,0.3)" } : {}}
      className={cn("glass-card p-6", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
