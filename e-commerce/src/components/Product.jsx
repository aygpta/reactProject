import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/CreateContext";
import { useNavigate } from "react-router";

const Product = () => {
  const { product, setProduct } = useContext(MyContext);
  const navigate = useNavigate();

  // API call
  const getAllProducts = async () => {
    try {
      const productsData = await axios.get("https://fakestoreapi.com/products");
      setProduct(productsData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {product?.map((e) => (
        <div
          key={e.id}
          onClick={() => navigate(`/product/${e.id}`)}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
        >
          <img
            src={e.image}
            alt={e.title}
            className="w-full h-48 object-contain mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {e.title}
          </h2>
          <p className="text-blue-600 font-medium mb-2">${e.price}</p>
          <p className="text-sm text-gray-600 mb-4">
            {e.description.substring(0, 80)}...
          </p>
          <button
            onClick={(event) => {
              event.stopPropagation(); // card click ka navigation stop kare
              console.log(e.id);
            }}
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors duration-300 mt-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
