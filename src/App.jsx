import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/addItems";
import Items from "./pages/items";
import Checkout from "./pages/checkout";
import HomePage from "./pages/homePage";
import axios from "axios";

function App() {
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/items");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* nav bar*/}
      <Nav cartProductCount={allCartProducts} />

      {/* main content */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addItems" element={<AddItems />} />
          <Route
            path="/items"
            element={
              <Items
                products={products}
                setAllCartProducts={setAllCartProducts}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout allCartProducts={allCartProducts} setAllCartProducts={setAllCartProducts}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
