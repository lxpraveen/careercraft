const reviews = [
  {
    name: "Rahul Sharma",
    text: "My resume started getting interview calls within 2 weeks.",
  },
  {
    name: "Priya Singh",
    text: "LinkedIn optimization was amazing. Highly recommended.",
  },
  {
    name: "Aman Verma",
    text: "Professional service with fast delivery.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
            >
              <p className="text-gray-300">⭐⭐⭐⭐⭐</p>
              <p className="mt-5 text-gray-400">{item.text}</p>
              <h3 className="mt-6 font-bold text-cyan-400">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;