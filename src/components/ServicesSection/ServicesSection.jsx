import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "LinkedIn Optimization",
    price: 19,
  },
  {
    id: 2,
    title: "Resume Optimization",
    price: 29,
  },
  {
    id: 3,
    title: "CV Optimization",
    price: 29,
  },
  {
    id: 4,
    title: "Certificate Optimization",
    price: 49,
  },
  {
    id: 5,
    title: "Job Portal Optimization",
    price: 49,
  },
  {
    id: 6,
    title: "Interview Preparation",
    price: 99,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleBuy = (item) => {
    navigate("/payment", {
      state: {
        name: item.title,
        price: item.price,
      },
    });
  };

  return (
    <section className="bg-slate-950 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-xl md:text-2xl font-bold min-h-[60px]">
                {item.title}
              </h3>

              <p className="text-cyan-400 text-3xl md:text-4xl font-bold mt-5">
                ₹{item.price}
              </p>

              <button
                onClick={() => handleBuy(item)}
                className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                Buy Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;