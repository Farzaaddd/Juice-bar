import { useState, useEffect } from "react";
import { items as initialItems } from "./data/items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : initialItems;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (title, price) => {
    if (!title || !price) return;

    const newItem = {
      id: Date.now(),
      title,
      price,
      description: "Custom item",
      image: "https://via.placeholder.com/150",
      whatsappNumber: "9715XXXXXXX"
    };

    setItems((prev) => [...prev, newItem]);
  };

  const handleOrder = (item) => {
    const message = `Hi, I want to order ${item.title}`;
    const url = `https://wa.me/${item.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home items={items} handleOrder={handleOrder} />}
        />

        <Route
          path="/admin"
          element={<Admin addItem={handleAddItem} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;