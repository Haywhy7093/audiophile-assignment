import React, { useState } from "react";
import mark2 from "../assets/mark2.png";
import xx59 from "../assets/xx59.png";
import earphone from "../assets/earphone.png";


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartDropdown: React.FC = () => {
 const [cartItems, setCartItems] = useState<CartItem[]>([
  { id: 1, name: "XX99 MK II", price: 2999, quantity: 1, image: mark2 },
  { id: 2, name: "XX59", price: 899, quantity: 2, image: xx59 },
  { id: 3, name: "YX1", price: 599, quantity: 1, image: earphone },
]);


  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeAll = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute right-4 top-20 w-96 bg-white rounded-lg shadow-xl p-6 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold uppercase text-sm tracking-wider">
          Cart ({cartItems.length})
        </h2>
        <button
          onClick={removeAll}
          className="text-gray-400 text-sm hover:underline"
        >
          Remove all
        </button>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-100 rounded-md">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 text-gray-500 hover:text-black"
              >
                -
              </button>
              <span className="px-2 text-sm font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 text-gray-500 hover:text-black"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-8 mb-4">
        <p className="uppercase text-sm text-gray-500">Total</p>
        <p className="font-bold text-lg">${total.toLocaleString()}</p>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-orange-600 text-white py-3 uppercase tracking-wider font-semibold rounded-md hover:bg-orange-500 transition">
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
