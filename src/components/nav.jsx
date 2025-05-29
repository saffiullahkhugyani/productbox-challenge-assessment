import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ cartProductCount }) {
  const [cartItemCount, setCartItemCount] = useState();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartItemCount(storedProducts.length);

    // Optional: Listen for changes to localStorage (from other tabs or components)
    const handleStorageChange = () => {
      const updatedProducts =
        JSON.parse(localStorage.getItem("products")) || [];
      setCartItemCount(updatedProducts.length);
    };
  }, [cartProductCount]);

  return (
    <nav className="sticky top-0 z-50">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-4 px-20 py-4 flex-1 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center">
          <Link to="homePage" className="text-2xl font-bold text-black">
            RandoStore
          </Link>
        </div>
        <div className="lg:flex md:flex items-center justify-end font-normal hidden text-black">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="addItems">
                <li>Add Items</li>
              </Link>
              <Link to="items">
                <li>Items</li>
              </Link>
              <Link to="checkout">
                <li>Checkout</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link
          to="checkout"
          className="flex items-center justify-center text-primary relative"
        >
          {cartItemCount > 0 ? (
            <span className="absolute -top-2 right-2 text-black text-xm font-bold rounded-full px-1.75 py-0.25 bg-yellow-400">
              {cartItemCount}
            </span>
          ) : (
            <div></div>
          )}
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
}
