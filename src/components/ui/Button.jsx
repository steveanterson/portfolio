import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const Button = ({ children, className, variant = "primary", as, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-6 py-3 cursor-pointer outline-none relative overflow-hidden";
  
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] border border-purple-500/50",
    outline: "bg-transparent border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]",
  };

  const Component = as === "a" || props.href ? motion.a : motion.button;

  return (
    <Component 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
