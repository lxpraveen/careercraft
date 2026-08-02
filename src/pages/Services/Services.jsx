import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "LinkedIn Profile Optimization",
    price: "₹999",
    features: [
      "Profile Rewrite",
      "SEO Optimization",
      "Headline Improvement",
      "Recruiter Friendly"
    ]
  },
  {
    id: 2,
    title: "Resume Optimization",
    price: "₹799",
    features: [
      "ATS Friendly",
      "Modern Design",
      "Keyword Optimization",
      "PDF Included"
    ]
  },
  {
    id: 3,
    title: "CV Optimization",
    price: "₹699",
    features: [
      "Professional Layout",
      "ATS Score",
      "Editable File",
      "Premium Format"
    ]
  },
  {
    id: 4,
    title: "Certificate Optimization",
    price: "₹499",
    features: [
      "Professional Formatting",
      "Better Presentation",
      "LinkedIn Ready",
      "High Quality"
    ]
  },
  {
    id: 5,
    title: "Job Portal Optimization",
    price: "₹899",
    features: [
      "Naukri",
      "Indeed",
      "Foundit",
      "Profile Ranking"
    ]
  }
];

const Services = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">

      <h1 className="text-5xl font-bold text-center mb-16">
        Our Services
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((service) => (

          <div
            key={service.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition"
          >

            <h2 className="text-2xl font-bold">
              {service.title}
            </h2>

            <h3 className="text-cyan-400 text-4xl mt-5">
              {service.price}
            </h3>

            <ul className="mt-6 space-y-3">

              {service.features.map((item, index) => (

                <li key={index}>
                  ✅ {item}
                </li>

              ))}

            </ul>

           <Link
  to="/order"
  className="block mt-8 bg-cyan-500 text-center py-3 rounded-xl hover:bg-cyan-600"
>
  Buy Now
</Link>
          </div>

        ))}

      </div>

    </section>
  );
};

export default Services;