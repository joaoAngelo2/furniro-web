import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
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
              to="/contact"
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
          <button aria-label="Shopping Cart" onFocus={() => setIsCartOpen(!isCartOpen)} >
            <img
              className="w-6"
              src="/src/assets/car-shop.svg"
              alt="Ícone de Carrinho de Compras"
            />
          </button>
        </div>
      </nav>

      {isCartOpen && (
        <div className="fixed top-0 right-0 h-[46.65rem] w-96 bg-white shadow-lg z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 ">
            <h2 className="text-black text-2xl font-semibold pb-3 font-['Poppins'] w-full  border-b">Shopping Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 pb-3 hover:text-gray-700 "
            >
              <img src="/src/assets/group.svg" alt="" className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4">
            <ul className="space-y-2">
              <li>Produto 1</li>
              <li>Produto 2</li>
              <li>Produto 3</li>
            </ul>
          </div>
        </div>
      )}

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
