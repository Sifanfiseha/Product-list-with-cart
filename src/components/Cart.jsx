import empty from "../assets/images/illustration-empty-cart.svg";
import products from "../data/products";
import removeIcon from "../assets/images/icon-remove-item.svg";
import icon from "../assets/images/icon-carbon-neutral.svg";
import CheckoutModal from "./CheckoutModal";
import { useRef } from "react";

export default function Cart({ onReset, onDelete, deserts = [] }) {
  const modal = useRef();

  function handleOpenModal() {
    modal.current.open();
  }

  const grouped = deserts.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const items = Object.entries(grouped).map(([id, quantity]) => {
    const product = products.find((p) => p.id === id);
    return {
      ...product,
      quantity,
      totalPrice: product.price * quantity,
    };
  });

  const totalCartPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="bg-white p-8 rounded-md">
      {deserts.length === 0 ? (
        <div>
          <h1 className="text-orange-700 font-bold text-2xl">Your cart (0)</h1>
          <img className="m-auto my-8" src={empty} alt="empty cart" />
          <p className="text-center text-rose-400">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-orange-700 font-bold text-2xl">
            Your cart ({deserts.length})
          </h1>
          <ul className="mt-6 space-y-4">
            {items.map((product) => (
              <li
                key={product.id}
                className="flex border-b pb-2 border-rose-100 justify-between items-center"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-Ros-900">
                    {product.name}
                  </span>
                  <div className="flex gap-6 items-center">
                    <span className="text-orange-600 font-semibold text-lg">
                      {product.quantity}x
                    </span>
                    <div className="flex gap-2">
                      <span className="text-Ros-400">
                        @${product.price.toFixed(2)}
                      </span>
                      <span className="text-Ros-500 font-semibold">
                        ${product.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    className="border border-Ros-400 p-1 cursor-pointer rounded-4xl"
                    onClick={() => onDelete(product.id)}
                  >
                    <img src={removeIcon} alt="Remove item" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center my-4">
            <p className="text-lg text-Ros-900">Order Total</p>
            <p className="text-2xl font-bold">${totalCartPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-center gap-2 bg-Ros-100 p-2 rounded-md text-Ros-900">
            <img src={icon} alt="carbon natural" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="bg-orange-700 hover:bg-orange-800 duration-110 ease-in cursor-pointer w-full mt-4 py-4 rounded-4xl font-bold text-white"
          >
            confirm order
          </button>
          <CheckoutModal
            onReset={onReset}
            products={items}
            ref={modal}
          ></CheckoutModal>
        </div>
      )}
    </div>
  );
}
