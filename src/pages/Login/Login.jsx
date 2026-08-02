import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../services/supabase";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login Successful");
    navigate("/services");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-2xl w-[400px]">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Login
        </h1>

       <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:border-cyan-500 outline-none"
/>

       <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-3 mb-6 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:border-cyan-500 outline-none"
/>

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 py-3 rounded-xl"
        >
          Login
        </button>

        <Link
          to="/register"
          className="block text-center text-cyan-400 mt-5"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;