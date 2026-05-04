import { useState } from "react";

function Admin({ addItem }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    addItem(title, price);
    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <h1>Admin</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Item name:"
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price:"
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Admin;