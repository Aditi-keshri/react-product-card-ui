import { useState } from "react";
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
  const [authMode, setAuthMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  const isSignup = authMode === "signup";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setUser({
      name: isSignup ? formData.name : formData.email.split("@")[0],
      email: formData.email,
    });

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  function handleLogout() {
    setUser(null);
    setAuthMode("login");
  }

  const authForm = (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-heading">
        <p className="panel-label">
          {isSignup ? "Create Account" : "Welcome Back"}
        </p>
        <h2>{isSignup ? "Sign up" : "Login"}</h2>
      </div>

      {isSignup && (
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
      )}

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </label>

      <div className="auth-actions">
        <button type="submit">{isSignup ? "Sign up" : "Login"}</button>
        <button
          type="button"
          className="ghost-button"
          onClick={() => setAuthMode(isSignup ? "login" : "signup")}
        >
          {isSignup ? "Already have an account?" : "Create account"}
        </button>
      </div>
    </form>
  );

  if (!user) {
    return (
      <main className="shop-page auth-page">
        <section className="intro" aria-labelledby="auth-title">
          <p className="eyebrow">Spring Collection</p>
          <h1 id="auth-title">Login to view the product page</h1>
          <p className="intro-copy">
            Sign in or create an account to explore the latest everyday
            essentials.
          </p>
        </section>

        <section className="auth-section" aria-label="Account access">
          {authForm}
        </section>
      </main>
    );
  }

  return (
    <main className="shop-page">
      <section className="profile-panel" aria-label="User profile">
        <div>
          <p className="panel-label">User Profile</p>
          <h2>Welcome, {user.name}</h2>
          <p>{user.email}</p>
        </div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </section>

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
