import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/addItems";
import Items from "./pages/items";
import Checkout from "./pages/checkout";
import HomePage from "./pages/homePage";

function App() {
  const [allCartProducts, setAllCartIProducts] = useState([]);

  return (
    <div className="bg-gray-100">
      {/* nav bar*/}
      <Nav cartProductCount={allCartProducts} />

      {/* main content */}
      <div>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/addItems" element={<AddItems />} />
          <Route
            path="/items"
            element={<Items setAllCartProducts={setAllCartIProducts} />}
          />
          <Route
            path="/checkout"
            element={<Checkout allCartProducts={allCartProducts} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
