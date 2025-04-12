import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";
import icon from "../assets/images/icon-order-confirmed.svg";

const CheckoutModal = forwardRef(({ products = [], onReset }, ref) => {
  const dialog = useRef();

  const totalCartPrice = products.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  useImperativeHandle(ref, () => ({
    open: () => dialog.current?.showModal(),
    close: () => dialog.current?.close(),
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             max-w-md p-6 rounded-xl bg-white shadow-lg z-50 w-full"
    >
      <div>
        <img src={icon} alt="Order Confirmed" />
        <h2 className="text-3xl font-bold my-4 mt-6">Order Confirmed</h2>
        <p className="text-Ros-500">We hope you enjoy your food!</p>

        <ul className="bg-Ros-50 p-4 rounded-md mt-4">
          {products.map((item) => (
            <li
              className="flex py-6 justify-between items-center border-b border-Ros-100"
              key={item.name}
            >
              <div className="flex gap-4 items-center">
                <img
                  className="w-16 rounded-md"
                  src={item.images.thumbnail}
                  alt={item.name}
                />
                <div>
                  <p className="font-black text-Ros-900">{item.name}</p>
                  <div className="flex gap-4 items-center">
                    <p className="text-orange-600 font-bold">
                      {item.quantity}x
                    </p>
                    <p className="text-Ros-400">@${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <p className="text-Ros-500 font-extrabold">
                ${item.totalPrice.toFixed(2)}
              </p>
            </li>
          ))}

          <li className="flex justify-between items-center py-4">
            <span className="text-Ros-500">Order Total</span>
            <span className="text-3xl font-extrabold text-Ros-900">
              ${totalCartPrice.toFixed(2)}
            </span>
          </li>
        </ul>

        <button
          className="bg-orange-700 hover:bg-orange-800 duration-110 ease-in cursor-pointer mt-4 py-4 rounded-4xl font-bold w-full text-white"
          onClick={() => {
            onReset();
            dialog.current?.close();
          }}
        >
          Start New Order
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CheckoutModal;
