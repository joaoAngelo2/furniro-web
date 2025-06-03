import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-7 px-4 md:px-0">
        <button
          className="md:hidden text-gray-800 focus:outline-none order-first"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        <Link to="/" className="flex items-center space-x-1">
          <img
            src="/src/assets/furniro-icon.svg"
            alt="Furniro Logo"
            className="md:h-8 h-6"
          />
          <h1 className="font-montserrat font-bold md:text-4xl text-3xl">
            Furniro
          </h1>
        </Link>

        <ul className="font-poppins hidden md:flex space-x-20 items-center">
          <li>
            <Link to="/" className="relative font-medium group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="relative font-medium text-gray-800 group"
            >
              Shop
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/" className="relative font-medium text-gray-800 group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="relative font-medium text-gray-800 group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-3 md:space-x-7">
          <button aria-label="User Profile">
            <img
              className="w-6"
              src="/src/assets/user-icon.svg"
              alt="Ícone de Usuário"
            />
          </button>
          <button aria-label="Shopping Cart">
            <img
              className="w-6"
              src="/src/assets/car-shop.svg"
              alt="Ícone de Carrinho de Compras"
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                className="font-poppins font-medium text-gray-800 hover:text-orange-500"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="font-poppins font-medium text-gray-800 hover:text-orange-500"
                onClick={toggleMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <span className="font-poppins font-medium text-gray-800 hover:text-orange-500 cursor-not-allowed">
                About
              </span>
            </li>
            <li>
              <span className="font-poppins font-medium text-gray-800 hover:text-orange-500 cursor-not-allowed">
                Contact
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
