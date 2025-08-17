import React, { useContext } from "react";
import { useParams, Link } from "react-router";
import { MyContext } from "../context/CreateContext";

const ProductDetails = () => {
  const { id } = useParams(); // URL se id (string)
  const { product } = useContext(MyContext);

  // Step: find() se matching product dhoondhna
  const item = product.find((p) => p.id === Number(id)); 
  // yaha Number(id) isliye ki API ka id number hai

  // Agar data load nahi hua abhi
  if (!product.length) {
    return <h2 className="text-center text-gray-500">Loading...</h2>;
  }

  // Agar product match nahi mila
  if (!item) {
    return <h2 className="text-center text-red-500">Product not found</h2>;
  }

  // Agar product mil gaya
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/product" className="text-blue-600 underline">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-80 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <p className="text-gray-700 mt-4">{item.description}</p>
          <p className="text-xl font-semibold mt-4 text-green-600">
            ${item.price}
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
