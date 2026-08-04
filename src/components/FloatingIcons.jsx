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
      left: "8%",
      delay: 0,
      color: "text-blue-400",
    },
    {
      Icon: FaFileAlt,
      top: "68%",
      left: "12%",
      delay: 1,
      color: "text-cyan-400",
    },
    {
      Icon: FaBriefcase,
      top: "22%",
      right: "8%",
      delay: 2,
      color: "text-green-400",
    },
    {
      Icon: FaAward,
      top: "72%",
      right: "12%",
      delay: 3,
      color: "text-yellow-400",
    },
  ];

  return (
    <>
      {icons.map(({ Icon, delay, color, ...pos }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} z-0`}
          style={pos}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
          }}
        >
          <div
            className="
              bg-white/10
              backdrop-blur-xl
              rounded-xl
              p-2
              sm:p-3
              lg:p-4
              border
              border-white/10
              shadow-xl
            "
          >
            <Icon className="text-xl sm:text-2xl lg:text-4xl" />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;