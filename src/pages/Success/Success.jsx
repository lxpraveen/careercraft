import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">
      <div className="max-w-2xl w-full bg-slate-900 rounded-3xl shadow-2xl p-10 text-center border border-cyan-500">

        <div className="text-7xl mb-5">🎉</div>

        <h1 className="text-4xl font-bold text-green-400">
          Payment Successful
        </h1>

        <p className="text-slate-300 text-lg mt-6 leading-8">
          Thank you for choosing <span className="text-cyan-400 font-semibold">CareerCraft</span>.
        </p>

        <p className="text-slate-400 mt-4 leading-8">
          Your order has been received successfully.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mt-8 text-left">
          <h2 className="text-cyan-400 font-semibold mb-3">
            📩 What happens next?
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>✅ Our team has received your order.</li>
            <li>✅ We will review your submitted details.</li>
            <li>✅ Once your service is completed, it will be delivered to the email address you provided.</li>
            <li>✅ If we need any additional information, we'll contact you via email.</li>
          </ul>
        </div>

        <div className="mt-8 bg-cyan-900/30 border border-cyan-500 rounded-xl p-4">
          <p className="text-cyan-300 font-medium">
            📧 Your completed LinkedIn Profile / Resume / CV / Certificate will be sent to your registered email address after it is ready.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;