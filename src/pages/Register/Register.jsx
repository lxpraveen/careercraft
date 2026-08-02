import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Registration Successful! Please check your email.");
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-2xl w-[400px] shadow-xl">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded mb-4 bg-white text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded mb-6 bg-white text-black"
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl text-white font-semibold"
        >
          {loading ? "Registering..." : "Register"}
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