const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 border-b border-gray-300 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-base">
        {/* Logo with specified dimensions */}
        <img
          src="https://cdn.prod.website-files.com/61dfd39227e690bdaa36e644/620b4f190d1db517468a776c_logo.svg"
          loading="eager"
          alt="Susan S. Lewis, LTD. Logo"
          style={{ width: "197.35px", height: "34px" }}
        />
      </div>
      {/* Center Menu Items */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        <a href="#taxes" className="hover:text-indigo-600">
          Taxes
        </a>
        <a href="#accounting" className="hover:text-indigo-600">
          Accounting
        </a>
        <a href="#industries" className="hover:text-indigo-600">
          Industries
        </a>
        <a href="#about" className="hover:text-indigo-600">
          About Us
        </a>
      </div>

      {/* Contact Section */}
      <div className="flex items-center space-x-4">
        <a
          href="tel:6308645549"
          className="hidden md:block text-gray-700 hover:text-indigo-600"
        >
          (630) 864-5549
        </a>
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
