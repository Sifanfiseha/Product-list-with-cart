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

  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_22rem] gap-12 items-start">
      <Shop>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            onSelect={() => handleAddDessert(product.id)}
          />
        ))}
      </Shop>
      <Cart deserts={shoppingCart.desserts} />
    </main>
  );
}
