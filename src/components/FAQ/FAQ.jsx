const FAQ = () => {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl">
              How long does delivery take?
            </h3>
            <p className="text-gray-400 mt-2">
              Usually within 24-48 hours.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl">
              Will my resume be ATS friendly?
            </h3>
            <p className="text-gray-400 mt-2">
              Yes, every resume is ATS optimized.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-bold text-xl">
              Can I request revisions?
            </h3>
            <p className="text-gray-400 mt-2">
              Yes, revisions are included with every service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;