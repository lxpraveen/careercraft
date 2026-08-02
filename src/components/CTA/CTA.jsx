import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-cyan-500 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold text-black">
          Ready To Get Your Dream Job?
        </h2>

        <p className="mt-6 text-xl text-black">
          Optimize your Resume, LinkedIn and Job Profiles today.
        </p>

        <Link
          to="/services"
          className="inline-block mt-10 bg-black text-white px-10 py-4 rounded-xl"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA;