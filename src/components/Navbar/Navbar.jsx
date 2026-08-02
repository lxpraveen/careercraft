import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-cyan-400"
        >
          CareerCraft
        </Link>

        <div className="flex gap-8 items-center">

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link
            to="/login"
            className="px-5 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;