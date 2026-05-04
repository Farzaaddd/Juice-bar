import { useState, useEffect } from "react";
// import { items as initialItems } from "../data/items";

function ItemsList({item, onOrder}) {
  return(
  <div style={{ marginBottom: "20px" }}>
      <img src={item.image} width="150" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.price} AED</p>

      <button onClick={() => onOrder(item)}>
        Order
      </button>
    </div>
  );
}

export default ItemsList;