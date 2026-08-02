import { useState } from "react";
import { supabase } from "../../services/supabase";
const OrderForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    service: "",
    experience: "",
    targetRole: "",
    requirements: "",
  });
const [resume, setResume] = useState(null);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let resumePath = "";

if (resume) {
  const fileName = `${Date.now()}-${resume.name}`;

  const { error: uploadError } = await supabase.storage
    .from("resumes")
    .upload(fileName, resume);

  if (uploadError) {
    alert(uploadError.message);
    return;
  }

  resumePath = fileName;
}

    const { error } = await supabase.from("orders").insert([
      {
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        linkedin: form.linkedin,
        service: form.service,
        experience: form.experience,
        target_role: form.targetRole,
        requirements: form.requirements,
        resume: resumePath,
        status: "Pending",
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Order Submitted Successfully");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-10 rounded-xl w-[700px]"
      >
        <h1 className="text-white text-4xl font-bold mb-8">
          Career Details
        </h1>

        <input
          className="w-full p-3 rounded mb-4"
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded mb-4"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded mb-4"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded mb-4"
          placeholder="LinkedIn URL"
          name="linkedin"
          onChange={handleChange}
        />

        <select
          className="w-full p-3 rounded mb-4"
          name="service"
          onChange={handleChange}
        >
          <option>Select Service</option>
          <option>LinkedIn Optimization</option>
          <option>Resume Optimization</option>
          <option>CV Optimization</option>
          <option>Certificate Optimization</option>
          <option>Job Profile Optimization</option>
        </select>

        <select
          className="w-full p-3 rounded mb-4"
          name="experience"
          onChange={handleChange}
        >
          <option>Select Experience</option>
          <option>Fresher</option>
          <option>1-3 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </select>

        <input
          className="w-full p-3 rounded mb-4"
          placeholder="Target Job Role"
          name="targetRole"
          onChange={handleChange}
        />
         <input
  type="file"
  accept=".pdf,.doc,.docx"
  onChange={(e) => setResume(e.target.files[0])}
  className="w-full p-3 rounded mb-4 bg-white"
/>
        <textarea
          className="w-full p-3 rounded mb-6"
          rows="5"
          placeholder="Requirements"
          name="requirements"
          onChange={handleChange}
        />

        <button className="bg-cyan-500 w-full py-3 rounded-xl text-lg">
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default OrderForm;