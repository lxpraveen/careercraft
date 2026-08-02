const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 bg-slate-950 text-white">
      <div className="text-center max-w-4xl">

        <h1 className="text-6xl font-bold leading-tight">
          Get Hired Faster with
          <span className="text-cyan-400"> CareerCraft</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          India's Premium Career Optimization Platform
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600">
            Explore Services
          </button>

          <button className="border border-cyan-500 px-8 py-4 rounded-xl">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;