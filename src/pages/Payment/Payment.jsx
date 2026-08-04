import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { auth } from "../../firebase";

console.log("Received:", location.state);
const API_URL = "https://careercraft-j02i.onrender.com";

const Payment = () => {
  const navigate = useNavigate();

const location = useLocation();

console.log(location.state);
  
  const service = location.state || {
    name: "CareerCraft Service",
    price: 19,
  };
  useEffect(() => {
  if (!auth.currentUser) {
    alert("Please login first");
    navigate("/login");
  }
}, []);
  console.log(service);

  const handlePayment = async () => {
    try {
      const { data: order } = await axios.post(
        `${API_URL}/create-order`,
        {
          amount: service.price,
        }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        name: "CareerCraft",
        description: service.name,

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
          console.log(response);

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
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <div className="bg-slate-900 border border-cyan-500/20 p-10 rounded-3xl w-full max-w-md shadow-[0_0_40px_rgba(6,182,212,.25)]">

        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Payment
        </h1>

        <div className="space-y-6">

          <div>
            <p className="text-slate-400 text-sm">
              Selected Service
            </p>

            <h2 className="text-2xl font-bold text-white mt-1">
              {service.name}
            </h2>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Total Amount
            </p>

            <h2 className="text-5xl font-bold text-cyan-400 mt-2">
              ₹{service.price}
            </h2>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-lg font-semibold text-white transition"
          >
            Pay ₹{service.price}
          </button>

        </div>

      </div>

    </div>
  );
};

export default Payment;