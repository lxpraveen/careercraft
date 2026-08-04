import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
          },
          color: {
            value: "#22d3ee",
          },
          links: {
            enable: true,
            color: "#22d3ee",
            distance: 140,
            opacity: 0.25,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticlesBackground;