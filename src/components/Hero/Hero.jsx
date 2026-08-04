import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

import BackgroundGlow from "../BackgroundGlow";
import FloatingIcons from "../FloatingIcons";
import AnimatedLaptop from "../AnimatedLaptop";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <BackgroundGlow />
      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center lg:text-left"
            >
              Get Hired Faster
              <br />

              With

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                CareerCraft
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mt-6 h-12 text-center lg:text-left"
            >
              <TypeAnimation
                sequence={[
                  "LinkedIn Profile Optimization",
                  2000,
                  "ATS Resume Expert",
                  2000,
                  "Resume Optimization",
                  2000,
                  "Career Growth Services",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
             className="mt-6 text-base sm:text-lg text-slate-300 leading-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              India's Premium Career Optimization Platform helping job seekers
              build ATS-friendly resumes, optimize LinkedIn profiles,
              improve recruiter visibility and get hired faster.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34,211,238,.6)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold"
              >
                🚀 Explore Services
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "#22d3ee",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-cyan-500 font-semibold"
              >
                📞 Contact Us
              </motion.button>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center"
            >
              <div>
                <h2 className="text-4xl font-bold text-cyan-400">1000+</h2>
                <p className="text-slate-400 mt-2">Resumes</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">500+</h2>
                <p className="text-slate-400 mt-2">LinkedIn</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">98%</h2>
                <p className="text-slate-400 mt-2">Success</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">24×7</h2>
                <p className="text-slate-400 mt-2">Support</p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
           className="flex justify-center mt-10 lg:mt-0"
          >
            <AnimatedLaptop />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;