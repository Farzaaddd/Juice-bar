import { useState, useEffect } from "react";
// import { items as initialItems } from "../data/items";

function ItemCard({ item, onOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
      
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-56 object-cover rounded-xl mb-3"
      />

      <h2 className="text-lg font-bold">{item.title}</h2>

      <p className="text-gray-500 text-sm mb-2">
        {item.description}
      </p>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-green-600">
          {item.price} AED
        </span>

        <button
          onClick={() => onOrder(item)}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default ItemCard;