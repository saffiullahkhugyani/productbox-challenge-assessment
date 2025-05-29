import ItemCard from "@/components/item-card";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Badge } from "../components/ui/badge";

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

export default function Items({ products, setAllCartProducts }) {
  const [productId, setProductId] = useState(0);
  const [allCartItems, setAllCartItems] = useState([]);

  useEffect(() => {
    if (productId == 0) return;
    const filteredObj = products.filter((product) => product.id == productId);
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
            {products.map((item) => (
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
