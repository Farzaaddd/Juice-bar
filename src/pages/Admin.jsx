import { useState } from "react";

function Admin({ addItem, deleteItem, editItem, items}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const [itemToDelete, setItemToDelete] = useState(null);

  const handleSubmit = () => {
    addItem(title, price, image);
    setTitle("");
    setPrice("");
    setImage("");
  };


  return (
  <>

<div className="bg-gray-100 min-h-screen p-4">

  <h1 className="text-2xl font-bold mb-6">⚙️ Admin Panel</h1>

  {/* Add Section */}
  <div className="bg-white p-4 rounded-xl shadow mb-6">
    <h3 className="font-semibold mb-3">Add New Item</h3>

    <input
      className="border p-2 rounded w-full mb-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Item name"
    />

    <input
      className="border p-2 rounded w-full mb-3"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      placeholder="Price"
    />

  <input
    className="border p-2 rounded w-full mb-2"
    value={image}
    onChange={(e) => setImage(e.target.value)}
    placeholder="Image URL"
  />

    <button
      onClick={handleSubmit}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Add Item
    </button>
  </div>

  {/* Items List */}
  <div className="bg-white p-4 rounded-xl shadow mb-6">
    <h3 className="font-semibold mb-3">Items</h3>

    {items.map((item) => (
      <div
        key={item.id}
        className="flex justify-between items-center border-b py-2"
      >
        <span>{item.title} - {item.price} AED</span>

        <div className="flex gap-2">
          <button
            onClick={() => setEditingItem(item)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => setItemToDelete(item)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Edit Section */}
  {editingItem && (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Edit Item</h3>

      <input
        className="border p-2 rounded w-full mb-2"
        value={editingItem.title}
        onChange={(e) =>
          setEditingItem({ ...editingItem, title: e.target.value })
        }
        placeholder="Title:"
      />

      <input
        className="border p-2 rounded w-full mb-3"
        value={editingItem.price}
        onChange={(e) =>
          setEditingItem({ ...editingItem, price: e.target.value })
        }
        placeholder="Price"
      />

      <input
        className="border p-2 rounded w-full mb-3"
        value={editItem.image}
        onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
        placeholder="Image URL"
      />

      <button
        onClick={() => {
          editItem(editingItem);
          setEditingItem(null);
        }}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  )}
</div>

  {/* Delete Modal show  */}
  {itemToDelete && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">

      <p className="mb-4 text-gray-700">
        Are you sure you want to delete{" "}
        <span className="font-bold">{itemToDelete.title}</span>?
      </p>

      <div className="flex justify-center gap-3">

        <button
          onClick={() => {
            deleteItem(itemToDelete.id);
            setItemToDelete(null);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Yes, Delete
        </button>

        <button
          onClick={() => setItemToDelete(null)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Cancel
        </button>

      </div>
    </div>
    </div>
  )}
    </>
  );
}

export default Admin;