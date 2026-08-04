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
      y: [0, -20, 0],
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
    <div className="relative w-[520px] h-[520px] flex items-center justify-center">

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
        className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[120px]"
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
        className="relative w-44 h-44 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_70px_rgba(34,211,238,.7)]"
      >
        <Sparkles size={60} className="text-white" />
      </motion.div>
            {/* Resume Card */}
      <FloatingCard className="-top-4 left-6 p-4 w-40" duration={5}>
        <div className="flex items-center gap-3">
          <FileText className="text-cyan-400" size={28} />
          <div>
            <h3 className="text-white font-semibold text-sm">Resume</h3>
            <p className="text-gray-400 text-xs">ATS Ready</p>
          </div>
        </div>
      </FloatingCard>

      {/* LinkedIn Card */}
      <FloatingCard className="top-10 right-4 p-4 w-44" duration={6} delay={0.5}>
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-white font-semibold text-sm">LinkedIn</h3>
            <p className="text-gray-400 text-xs">SEO Optimized</p>
          </div>
        </div>
      </FloatingCard>

      {/* Certificate Card */}
      <FloatingCard className="bottom-8 left-2 p-4 w-44" duration={7} delay={1}>
        <div className="flex items-center gap-3">
          <Award className="text-yellow-400" size={28} />
          <div>
            <h3 className="text-white font-semibold text-sm">Certificates</h3>
            <p className="text-gray-400 text-xs">Verified</p>
          </div>
        </div>
      </FloatingCard>

      {/* Jobs Card */}
      <FloatingCard className="bottom-12 right-2 p-4 w-44" duration={5.5} delay={1.2}>
        <div className="flex items-center gap-3">
          <Briefcase className="text-green-400" size={28} />
          <div>
            <h3 className="text-white font-semibold text-sm">Jobs</h3>
            <p className="text-gray-400 text-xs">Daily Updates</p>
          </div>
        </div>
      </FloatingCard>
            {/* Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[320px] h-[320px] rounded-full border border-cyan-500/20"
      />

      {/* Small Glowing Dots */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-20 left-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
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
        className="absolute bottom-24 left-24 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_20px_#3b82f6]"
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
        className="absolute top-40 right-10 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]"
      />

    </div>
  );
};

export default AnimatedLaptop;