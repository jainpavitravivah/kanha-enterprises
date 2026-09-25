import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Navbar */}
        <div className="flex items-center justify-between h-20">

         <div>
  <Link to="/" onClick={closeMenu} className="block">

    <img
      src="/logo.png"
      alt="Kahana Enterprises"
      className="h-14 w-auto object-contain"
    />

  </Link>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Services
            </Link>

            <Link
              to="/our-work"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Our Work
            </Link>

            <Link
              to="/contact"
              className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition font-medium"
            >
              Contact Us
            </Link>

          </nav>


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition"
              >
                About Us
              </Link>

              <Link
                to="/services"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition"
              >
                Services
              </Link>

              <Link
                to="/our-work"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium transition"
              >
                Our Work
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mx-4 mt-2 bg-blue-700 text-white text-center px-5 py-3 rounded-lg hover:bg-blue-800 transition font-medium"
              >
                Contact Us
              </Link>

            </div>

          </nav>
        )}

      </div>

    </header>
  );
}

export default Navbar;