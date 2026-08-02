import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "LinkedIn Profile Optimization",
    price: "₹999",
    features: [
      "Profile Rewrite",
      "SEO Optimization",
      "Headline Improvement",
      "Recruiter Friendly",
    ],
  },
  {
    id: 2,
    title: "Resume Optimization",
    price: "₹799",
    features: [
      "ATS Friendly",
      "Modern Design",
      "Keyword Optimization",
      "PDF Included",
    ],
  },
  {
    id: 3,
    title: "CV Optimization",
    price: "₹699",
    features: [
      "Professional Layout",
      "ATS Score",
      "Editable File",
      "Premium Format",
    ],
  },
  {
    id: 4,
    title: "Certificate Optimization",
    price: "₹499",
    features: [
      "Professional Formatting",
      "LinkedIn Ready",
      "Better Presentation",
      "Premium Quality",
    ],
  },
  {
    id: 5,
    title: "Job Portal Profile Optimization",
    price: "₹899",
    features: [
      "Naukri Profile",
      "Indeed Profile",
      "Foundit Profile",
      "SEO Optimization",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 transition"
            >
              <h2 className="text-2xl font-bold">{service.title}</h2>

              <h3 className="text-cyan-400 text-4xl mt-5">
                {service.price}
              </h3>

              <ul className="mt-6 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index}>✅ {feature}</li>
                ))}
              </ul>

              <button
                onClick={() => {
                  console.log("Buy Now Clicked");
                  navigate("/payment");
                }}
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

export default Services;