import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Registration Successful! Check your email.");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-2xl w-[400px]">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-cyan-500 py-3 rounded-xl"
        >
          Register
        </button>

        <Link
          to="/login"
          className="block text-center text-cyan-400 mt-5"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default Register;