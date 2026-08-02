const data = [
  {
    icon: "🚀",
    title: "ATS Friendly",
    desc: "Optimized for ATS systems to increase interview chances.",
  },
  {
    icon: "💼",
    title: "HR Experts",
    desc: "Built by experienced recruiters and career professionals.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Get your optimized profile within 24-48 hours.",
  },
  {
    icon: "🏆",
    title: "Trusted",
    desc: "Professional quality with customer satisfaction.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose CareerCraft
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
              <p className="mt-4 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;