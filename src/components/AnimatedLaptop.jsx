import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";

const FloatingCard = ({
  children,
  className = "",
  duration = 6,
  delay = 0,
}) => (
  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[0_0_35px_rgba(34,211,238,.25)] ${className}`}
  >
    {children}
  </motion.div>
);

const AnimatedLaptop = () => {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] flex items-center justify-center mx-auto">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-cyan-500/20 blur-[90px]"
      />

      {/* AI Orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
          },
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_70px_rgba(34,211,238,.7)]"
      >
        <Sparkles className="text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
      </motion.div>

      {/* Resume */}
      <FloatingCard
        className="-top-2 left-1 p-3 sm:p-4 w-28 sm:w-36 lg:w-40"
        duration={5}
      >
        <div className="flex items-center gap-2">
          <FileText className="text-cyan-400" size={20} />
          <div>
            <h3 className="text-white font-semibold text-xs sm:text-sm">
              Resume
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-xs">
              ATS Ready
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* LinkedIn */}
      <FloatingCard
        className="top-4 right-1 p-3 sm:p-4 w-28 sm:w-36 lg:w-40"
        duration={6}
        delay={0.5}
      >
        <div>
          <h3 className="text-white font-semibold text-xs sm:text-sm">
            LinkedIn
          </h3>
          <p className="text-gray-400 text-[10px] sm:text-xs">
            SEO Optimized
          </p>
        </div>
      </FloatingCard>

      {/* Certificate */}
      <FloatingCard
        className="bottom-2 left-0 p-3 sm:p-4 w-28 sm:w-36 lg:w-40"
        duration={7}
        delay={1}
      >
        <div className="flex items-center gap-2">
          <Award className="text-yellow-400" size={20} />
          <div>
            <h3 className="text-white font-semibold text-xs sm:text-sm">
              Certificates
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-xs">
              Verified
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Jobs */}
      <FloatingCard
        className="bottom-4 right-0 p-3 sm:p-4 w-28 sm:w-36 lg:w-40"
        duration={5.5}
        delay={1.2}
      >
        <div className="flex items-center gap-2">
          <Briefcase className="text-green-400" size={20} />
          <div>
            <h3 className="text-white font-semibold text-xs sm:text-sm">
              Jobs
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-xs">
              Daily Updates
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] lg:w-[320px] lg:h-[320px] rounded-full border border-cyan-500/20"
      />

      {/* Dots */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-12 left-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [1, 0.4, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-24 right-6 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]"
      />
    </div>
  );
};

export default AnimatedLaptop;