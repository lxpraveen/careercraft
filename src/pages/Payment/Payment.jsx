import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://careercraft-j02i.onrender.com";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // Backend se Razorpay Order create karo
      const { data: order } = await axios.post(
        `${API_URL}/create-order`,
        {
          amount: 999,
        }
      );

      console.log("Order:", order);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        name: "CareerCraft",
        description: "CareerCraft Service Payment",

        image: "https://razorpay.com/favicon.png",

        prefill: {
          name: "Praveen Kumar Singh",
          email: "praveenavi6589@gmail.com",
          contact: "9876543210",
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
            console.log("Payment Closed");
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.log(response);

        alert(
          "Payment Failed\n\n" +
            response.error.description
        );
      });

      rzp.open();
    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(
          "Backend Error : " +
            JSON.stringify(err.response.data)
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

        <p className="text-lg">
          Service Amount
        </p>

        <h2 className="text-5xl font-bold text-cyan-400 mt-2 mb-8">
          ₹999
        </h2>

        <button
          onClick={handlePayment}
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-lg font-semibold"
        >
          Pay Now
        </button>

      </div>
    </div>
  );
};

export default Payment;