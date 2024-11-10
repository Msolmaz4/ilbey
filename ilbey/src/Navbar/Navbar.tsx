import Button from "../Button/Button";


const Navbar = () => {
  const navTitle = [
    { title: "Taxes", items: ["income", "aaaa", "bbbb", "cccc"] },
    { title: "Accounting", items: ["income", "aaaa", "bbbb", "cccc"] },
    { title: "Industries", items: ["income", "aaaa", "bbbb", "cccc"] },
    { title: "About Us", items: ["income", "ddddddddd", "cccccccccccc"] },
  ];

  return (
    <nav className="sticky top-0 bg-white p-4 border-b border-gray-300 shadow-md z-50 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-base"> 
        <img
          src="https://cdn.prod.website-files.com/61dfd39227e690bdaa36e644/620b4f190d1db517468a776c_logo.svg"
          loading="eager"
          alt="Susan S. Lewis, LTD. Logo"
          style={{ width: "197.35px", height: "34px" }}
        />
      </div>

      {/* Center Menu Items */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        {navTitle.map((navItem, index) => (
          <div key={index} className="relative group">
            <span className="cursor-pointer hover:text-indigo-600">{navItem.title}</span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-200">
              <ul className="py-2">
                {navItem.items.map((item, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-indigo-100">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex items-center space-x-4">
        <a href="tel:6308645549" className="hidden md:block text-gray-700 hover:text-indigo-600">
          (630) 864-5549
        </a>
        
        <Button text ="Contact Us"/>
        
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
