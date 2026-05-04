function Home({ items, handleOrder }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Menu</h1>

      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="150" />
          <h2>{item.title}</h2>
          <p>{item.price} AED</p>

          <button onClick={() => handleOrder(item)}>
            Order
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;