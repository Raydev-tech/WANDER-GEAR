import React, { useState, useEffect } from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Travel Backpack",
      price: 60,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      name: "Hiking Boots",
      price: 90,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div
          className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-blue-600" />
            Your Cart
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-500">${item.price}</p>
                      {/* Quantity control */}
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 border rounded-l-lg"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-12 text-center border-t border-b"
                        />
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 border rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div
          className="bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 text-gray-700">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm text-gray-600"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t my-4"></div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
