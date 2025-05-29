import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import placeholder from "../assets/placeholder.svg";
import { Star, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function ItemCard({ product, setProductId }) {
  // handle add to cart function
  const handleAddToCart = (product) => {
    let storedProducts = [];
    if (localStorage.getItem("products")) {
      storedProducts = JSON.parse(localStorage.getItem("products"));
    }

    const itemExists = storedProducts.some((item) => item.id === product.id);

    if (itemExists) {
      console.log("Item alredy in cart");
      console.log(storedProducts);
    } else {
      setProductId(product.id);
      storedProducts.push(product);
      localStorage.setItem("products", JSON.stringify(storedProducts));
      alert("Product has been added to cart");
    }
  };

  return (
    <Card className={"group hover:shadow-lg cursor-pointer pt-0"}>
      <CardHeader className={"p-0"}>
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={`http://localhost:3000/${product.img}`}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-250"
          />
          <Badge className="absolute top-2 right-2 bg-white text-black">
            Good
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2">
          <Badge className="bg-gray-200 text-gray-800 mb-2">
            Product Category
          </Badge>
          <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
        </div>
        <CardTitle className="text-lg mb-2 line-clamp-2">
          {product.name}
        </CardTitle>
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">(4.6 reviews)</span>
        </div>
        <CardDescription className="text-sm mb-3">
          Sold by Rando User
        </CardDescription>
        <div className="flex justify-between items-center">
          <span>PKR {product.price}</span>
          <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
