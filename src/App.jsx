import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Product from "./components/Product";
import products from "./data/products";
import { useState } from "react";

export default function App() {
  const [shoppingCart, setShoppingCart] = useState({ desserts: [] });

  function handleAddDessert(id) {
    setShoppingCart((prev) => ({
      desserts: [...prev.desserts, id],
    }));
  }
  function handleDelet(id) {
    setShoppingCart((prev) => ({
      ...prev,
      desserts: prev.desserts.filter((item) => item !== id),
    }));
  }
  function handleMinus(id) {
    const index = shoppingCart.desserts.indexOf(id);
    setShoppingCart((prev) => ({
      ...prev,
      desserts: [
        ...prev.desserts.slice(0, index),
        ...prev.desserts.slice(index + 1),
      ],
    }));
  }
  function handleReset() {
    setShoppingCart({ desserts: [] });
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_22rem] gap-12 items-start">
      <Shop>
        {products.map((product) => (
          <Product
            onMinus={handleMinus}
            key={product.id}
            {...product}
            deserts={shoppingCart.desserts}
            onSelect={() => handleAddDessert(product.id)}
          />
        ))}
      </Shop>
      <Cart
        onReset={handleReset}
        onDelete={handleDelet}
        deserts={shoppingCart.desserts}
      />
    </main>
  );
}
