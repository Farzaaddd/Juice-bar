import ItemCard from "../components/ItemCard";

function Home({ items, handleOrder }) {
  return (
    <div className="bg-gray-100 min-h-screen p-4">

      <h1 className="text-2xl font-bold mb-4">
        🍹 Menu
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onOrder={handleOrder}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;