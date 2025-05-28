import ItemCard from "@/components/item-card";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Badge } from "../components/ui/badge";

const featuredProducts = [
  {
    id: 1,
    title: "Vintage Polaroid Camera",
    price: 89.99,
    seller: "PhotoEnthusiast",
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    condition: "Used - Good",
  },
  {
    id: 2,
    title: "Hand-knitted Wool Scarf",
    price: 35.0,
    seller: "CraftyGrandma",
    rating: 5.0,
    reviews: 12,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fashion",
    condition: "New",
  },
  {
    id: 3,
    title: "Rare Pokemon Card Collection",
    price: 250.0,
    seller: "CardMaster99",
    rating: 4.9,
    reviews: 8,
    image: "/placeholder.svg?height=300&width=300",
    category: "Collectibles",
    condition: "Mint",
  },
  {
    id: 4,
    title: "Homemade Sourdough Starter",
    price: 15.0,
    seller: "BreadLover",
    rating: 4.7,
    reviews: 31,
    image: "/placeholder.svg?height=300&width=300",
    category: "Food",
    condition: "Fresh",
  },
  {
    id: 5,
    title: "Custom Gaming Setup",
    price: 1200.0,
    seller: "TechGuru",
    rating: 4.9,
    reviews: 15,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    condition: "Like New",
  },
  {
    id: 6,
    title: "Antique Brass Compass",
    price: 75.0,
    seller: "VintageHunter",
    rating: 4.6,
    reviews: 19,
    image: "/placeholder.svg?height=300&width=300",
    category: "Antiques",
    condition: "Used - Fair",
  },
];

const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Collectibles",
  "Books",
  "Sports",
  "Art",
  "Food",
];

export default function Items({ setAllCartProducts }) {
  const [productId, setProductId] = useState(0);
  const [allCartItems, setAllCartItems] = useState([]);

  useEffect(() => {
    if (productId == 0) return;
    const filteredObj = featuredProducts.filter(
      (product) => product.id == productId
    );
    setAllCartItems([...allCartItems, ...filteredObj]);
    // alert(`your item ${filteredObj.at(0).title} has been added to cart`);
  }, [productId]);

  useEffect(() => {
    if (allCartItems.length == 0) return;
    setAllCartProducts(allCartItems);
  }, [allCartItems]);

  return (
    <div className="min-h-screen">
      {/*Hero Section*/}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Discover Random Items</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From vintage treasures to handmade crafts, find unique items from
            sellers around the world. Or list your own random finds and turn
            clutter into cash!
          </p>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={"outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground m-1"
            >
              {category}
            </Badge>
          ))}
        </div>
      </section>
      {/*Featured Items Section*/}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold mb-6">Featured Items</h1>
            <Button variant={"outline"}>View all</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((item) => (
              <ItemCard
                product={item}
                setProductId={setProductId}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
