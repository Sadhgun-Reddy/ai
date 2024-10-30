import React from "react";

const Navbar = () => {
  return (
    <header className="w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 fixed top-0 z-50 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform">
          <img
            src="https://cdn.prod.website-files.com/607e1b2ba1855c3039f2d548/64919076bf4bdd782a80350a_Layer%201.svg"
            alt="helloscribe"
            className="h-8 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/about-us" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            About Us
          </a>
          <a href="/pricing-section" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Pricing
          </a>
          <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Contact
          </a>
        </nav>

        {/* Right Side: Login and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            <span>Log in</span>
            <img
              src="images/64919bddce1ed295b04bb87e_ArrowUp.svg"
              alt="helloscribe"
              className="h-4 w-4"
            />
          </a>
          <a
            href="/"
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            Try Free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
