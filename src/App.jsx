import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    title: "Everyday Runner",
    price: "$89.00",
    label: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Trail Backpack",
    price: "$64.50",
    label: "Popular",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Studio Headphones",
    price: "$129.99",
    label: "Sale",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Minimal Watch",
    price: "$149.00",
    label: "Limited",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <main className="shop-page">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Spring Collection</p>
        <h1 id="page-title">Fresh picks for everyday motion</h1>
        <p className="intro-copy">
          Refresh your wardrobe with easy, everyday essentials.
          <br />
          Light, stylish, and ready for wherever the day takes you.
        </p>
      </section>

      <section className="product-grid" aria-label="Featured products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default App;
