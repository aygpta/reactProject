import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";

import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ShopEase</span>
            </div>
            <div className="flex space-x-4 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-blue-100"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-blue-100"
                  }`
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-blue-100"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-blue-100"
                  }`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "text-white bg-blue-600"
                      : "text-gray-700 hover:bg-blue-100"
                  }`
                }
                style={{ marginLeft: "12px" }}
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h13"
                  />
                </svg>
                Cart
                {/* Example badge, replace 0 with cart count if available */}
                <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  0
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
