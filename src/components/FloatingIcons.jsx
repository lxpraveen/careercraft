import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFileAlt,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

const FloatingIcons = () => {
  const icons = [
    {
      Icon: FaLinkedin,
      top: "18%",
      left: "12%",
      delay: 0,
      color: "text-blue-400",
    },
    {
      Icon: FaFileAlt,
      top: "65%",
      left: "20%",
      delay: 1,
      color: "text-cyan-400",
    },
    {
      Icon: FaBriefcase,
      top: "25%",
      right: "12%",
      delay: 2,
      color: "text-green-400",
    },
    {
      Icon: FaAward,
      top: "70%",
      right: "18%",
      delay: 3,
      color: "text-yellow-400",
    },
  ];

  return (
    <>
      {icons.map(({ Icon, delay, color, ...pos }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} text-4xl`}
          style={pos}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
          }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
            <Icon />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;