import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";

const ServiceForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    service: "",
    linkedin: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("orders").insert([
      {
        ...form,
        status: "Pending",
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-10 rounded-2xl w-[600px]"
      >
        <h1 className="text-3xl text-white font-bold mb-8">
          Service Details
        </h1>

        <input
          name="full_name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
        />

        <input
          name="service"
          placeholder="Service Name"
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
        />

        <input
          name="linkedin"
          placeholder="LinkedIn URL"
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
        />

        <textarea
          name="requirements"
          placeholder="Requirements"
          onChange={handleChange}
          className="w-full p-3 rounded mb-6"
        />

        <button className="w-full bg-cyan-500 py-3 rounded-xl">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;