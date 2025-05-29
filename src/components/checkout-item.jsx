import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.svg";
import { Star, Trash, Trash2, Truck } from "lucide-react";

const sampleCartItems = [
  {
    id: 1,
    title: "Vintage Polaroid Camera",
    price: 89.99,
    seller: "PhotoEnthusiast",
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.png",
    category: "Electronics",
    condition: "Used - Good",
    quantity: 1,
    shipping: 8.99,
    estimatedDelivery: "3-5 business days",
  },
  {
    id: 2,
    title: "Hand-knitted Wool Scarf",
    price: 35.0,
    seller: "CraftyGrandma",
    rating: 5.0,
    reviews: 12,
    image: "/placeholder.png",
    category: "Fashion",
    condition: "New",
    quantity: 2,
    shipping: 0,
    estimatedDelivery: "2-4 business days",
  },
  {
    id: 3,
    title: "Rare Pokemon Card Collection",
    price: 250.0,
    seller: "CardMaster99",
    rating: 4.9,
    reviews: 8,
    image: "/placeholder.png",
    category: "Collectibles",
    condition: "Mint",
    quantity: 1,
    shipping: 15.99,
    estimatedDelivery: "5-7 business days",
  },
];

export default function CheckoutItem({ checkOutItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (checkOutItems.length == 0) return;
    setProducts(checkOutItems);
    console.log(checkOutItems);
  }, [checkOutItems]);

  // Function: handle delete item
  const handleDeleteItem = (productId) => {
    if (products.length == 0) return;
    removeItem(productId);
  };

  const removeItem = (idToRemove) => {
    let storedProducts = [];
    if (localStorage.getItem("products")) {
      storedProducts = JSON.parse(localStorage.getItem("products"));
    }
    // Updated products after removing the item
    const updatedProducts = storedProducts.filter(
      (item) => item.id !== idToRemove
    );

    // Update localStorage with the remove item from the list
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // setting the sate after removing the product
    setProducts((products) =>
      products.filter((item) => item.id !== idToRemove)
    );
  };

  return (
    <div>
      {/*Cart Items*/}
      <Card className={"group cursor-pointer"}>
        <CardHeader>
          <CardTitle className={"flex items-center justify-between"}>
            <span className="text-2xl font-bold">
              Your Cart ({products.length} items)
            </span>
            {/* <Link className="text-sm text-primary hover:underline">
              Continue Shopping
            </Link> */}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-col-1 space-y-4 p-2">
            {products.length == 0 ? (
              <div className="text-center text-2xl font-bold">
                Please select items to purchase
              </div>
            ) : (
              products.map((item) => (
                <div
                  key={item.id}
                  className="flex border rounded shadow hover:shadow-lg hover:pointer hover:bg-gray-50"
                >
                  <img
                    src={`http://localhost:3000/${item.img}`}
                    width={200}
                    height={200}
                    className="h-48 object-cover group-hover:scale-102 transition-transform duration-250"
                  />
                  <div className=" w-full flex justify-between m-4 ">
                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="text-lg font-bold">{item.name}</span>
                        <div className="flex items-center space-x-1 mb-4 text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>4.6</span>
                          <span>(6 reviews)</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-md text-muted-foreground font-semibold">
                          Sold by Rando User
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <Trash2
                        onClick={() => handleDeleteItem(item.id)}
                        className="w-4 h-4 text-red-400 mt-2 mr-2 hover:transition hover:h-6 hover:w-6"
                      />
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-bold">{item.price}</span>
                        <span className="text-muted-foreground text-sm">
                          + 349 shipping
                        </span>
                        <div className="flex items-center gap-1">
                          <Truck className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-600">
                            3-5 Business days
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
