import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

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
    console.log("Selected Service:", item);

    navigate("/payment", {
      state: {
        name: item.title,
        price: Number(item.price),
      },
    });
  };

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 duration-300"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-cyan-400 text-3xl mt-5">
                ₹{item.price}
              </p>

              <button
                onClick={() => handleBuy(item)}
                className="w-full mt-8 bg-cyan-500 py-3 rounded-xl hover:bg-cyan-600"
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