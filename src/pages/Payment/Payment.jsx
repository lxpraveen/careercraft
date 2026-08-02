import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful ✅");
    navigate("/service");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
      <div className="bg-slate-900 p-10 rounded-2xl w-[450px]">
        <h1 className="text-3xl font-bold">Payment</h1>

        <div className="mt-8">
          <p className="text-xl">Service Amount</p>
          <h2 className="text-4xl text-cyan-400 mt-2">₹999</h2>
        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-8 bg-cyan-500 py-3 rounded-xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;