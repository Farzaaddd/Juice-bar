import { useState, useEffect } from "react";
import { items as initialItems } from "./data/items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {

  // Local Storage 
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : initialItems;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Add Item on website 
  const handleAddItem = (title, price, image) => {
    if (!title || !price) return;

    const newItem = {
      id: Date.now(),
      title,
      price,
      description: "Custom item",
      image: image || "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
      whatsappNumber: "9715XXXXXXX"
    };

    setItems((prev) => [...prev, newItem]);
    alert("Item added successfully");
  };

  // Ordering by WhatsApp  
  const handleOrder = (item) => {
    const message = `Hi, I want to order ${item.title}`;
    const url = `https://wa.me/${item.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Editing items 
  const handleEditItem = (updatedItem) => {
  setItems((prev) =>
    prev.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    )
  );

    alert("Item edited successfully");
};

// Delete items 
const handleDeleteItem = (id) => {
  setItems((prev) => prev.filter((item) => item.id !== id));
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
          element={<Admin  addItem={handleAddItem} deleteItem={handleDeleteItem} editItem={handleEditItem} items={items} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;