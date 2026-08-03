import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // Create Order from Backend
      const { data: order } = await axios.post(
        "http://localhost:5000/create-order",
        {
          amount: 999,
        }
      );

      console.log("Order Created:", order);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,
        currency: order.currency,
        name: "CareerCraft",
        description: "CareerCraft Service Payment",

        image: "https://razorpay.com/favicon.png",

        order_id: order.id,

        prefill: {
          name: "Praveen",
          email: "test@example.com",
          contact: "9876543210",
        },

        notes: {
          service: "CareerCraft Premium",
        },

        theme: {
          color: "#06b6d4",
        },

        handler: function (response) {
          console.log("Payment Success:", response);

          alert("✅ Payment Successful");

          navigate("/service");
        },

        modal: {
          ondismiss: function () {
            console.log("Payment Popup Closed");
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.log("Payment Failed:", response.error);

        alert(
          "Payment Failed\n\n" +
            "Code : " +
            response.error.code +
            "\n\nReason : " +
            response.error.description
        );
      });

      razorpay.open();
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(
          "Backend Error : " +
            JSON.stringify(error.response.data)
        );
      } else {
        alert("Network Error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
      <div className="bg-slate-900 p-10 rounded-2xl w-[450px] shadow-xl">
        <h1 className="text-3xl font-bold mb-6">
          Payment
        </h1>

        <div className="mb-8">
          <p className="text-lg">Service Amount</p>

          <h2 className="text-5xl font-bold text-cyan-400 mt-2">
            ₹999
          </h2>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all py-4 rounded-xl text-lg font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;