import { motion } from "framer-motion";

const BackgroundGlow = () => {
  return (
    <>
      {/* Top Left Glow */}
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
        className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40
        w-[250px] h-[250px]
        sm:w-[400px] sm:h-[400px]
        lg:w-[600px] lg:h-[600px]
        rounded-full bg-cyan-500/20 blur-[80px] sm:blur-[100px] lg:blur-[140px]"
      />

      {/* Bottom Right Glow */}
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
        className="absolute bottom-0 right-0
        w-[220px] h-[220px]
        sm:w-[350px] sm:h-[350px]
        lg:w-[500px] lg:h-[500px]
        rounded-full bg-blue-600/20 blur-[80px] sm:blur-[100px] lg:blur-[140px]"
      />

      {/* Center Glow */}
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
        className="absolute left-1/2 bottom-8 -translate-x-1/2
        w-[180px] h-[180px]
        sm:w-[260px] sm:h-[260px]
        lg:w-[350px] lg:h-[350px]
        rounded-full bg-cyan-400/20 blur-[70px] sm:blur-[90px] lg:blur-[120px]"
      />
    </>
  );
};

export default BackgroundGlow;