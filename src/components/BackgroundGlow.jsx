import { motion } from "framer-motion";

const BackgroundGlow = () => {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 250, 0],
          y: [0, -120, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -200, 0],
          y: [0, 150, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px]"
      />

      <motion.div
        animate={{
          y: [0, -80, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 bottom-10 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[120px]"
      />
    </>
  );
};

export default BackgroundGlow;