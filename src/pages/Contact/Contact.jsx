const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          Contact Us
        </h1>

        <div className="bg-slate-900 rounded-2xl p-8 space-y-8">

          <div>
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>

            <a
              href="praveen705433@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              careercraftindia@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">📱 WhatsApp</h3>

            <a
              href="https://wa.me/919026770934"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">✈ Telegram</h3>

            <a
              href="https://t.me/stock2999"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:underline"
            >
              Join Telegram
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🕒 Working Hours</h3>

            <p className="text-gray-300">
              Monday - Saturday (10:00 AM - 8:00 PM)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;