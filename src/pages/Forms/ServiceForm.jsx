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

    // Logged in user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase.from("orders").insert([
      {
        user_id: user.id,
        full_name: form.full_name,
        email: form.email,
        service: form.service,
        linkedin: form.linkedin,
        requirements: form.requirements,
        status: "Pending",
      },
    ]);

    if (error) {
      console.error(error);
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
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
          required
        />

        <input
          type="text"
          name="service"
          placeholder="Service Name"
          value={form.service}
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
          required
        />

        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={form.linkedin}
          onChange={handleChange}
          className="w-full p-3 rounded mb-4"
          required
        />

        <textarea
          name="requirements"
          placeholder="Requirements"
          value={form.requirements}
          onChange={handleChange}
          className="w-full p-3 rounded mb-6"
          rows="5"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;