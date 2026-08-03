const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          About CareerCraft
        </h1>

        <p className="text-lg text-gray-300 leading-8">
          CareerCraft helps students and professionals improve their
          LinkedIn profile, Resume, CV and Job Portal profiles to increase
          interview opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Our Mission
            </h3>
            <p>
              Help every job seeker build a professional online presence.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Trusted Service
            </h3>
            <p>
              ATS optimized resumes and recruiter-friendly LinkedIn profiles.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Fast Delivery
            </h3>
            <p>
              Delivery within 24-48 hours with premium quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;