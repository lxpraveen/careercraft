import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logout Successful");
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-cyan-400"
        >
          CareerCraft
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          {user ? (
            <>
              <span className="text-cyan-400 text-sm">
                {user.email}
              </span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-5 py-5 space-y-5">

          <Link
            to="/"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/about"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {user ? (
            <>
              <p className="text-cyan-400 break-all text-sm">
                {user.email}
              </p>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 py-3 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-cyan-500 py-3 rounded-xl"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;