import React, { useContext } from "react";
import { MyContext } from "../context/CreateContext";

const Cart = () => {
  const { cart } = useContext(MyContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-4 rounded">
            <h2 className="font-semibold">{item.title}</h2>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
