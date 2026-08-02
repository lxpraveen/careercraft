const Stats = () => {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">500+</h2>
          <p className="mt-3 text-gray-400">Profiles Optimized</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">95%</h2>
          <p className="mt-3 text-gray-400">ATS Score</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">4.9★</h2>
          <p className="mt-3 text-gray-400">Customer Rating</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">24h</h2>
          <p className="mt-3 text-gray-400">Fast Delivery</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;