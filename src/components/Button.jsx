import cartIcon from "../assets/images/icon-add-to-cart.svg";

export default function Button({ children, onclick }) {
  return (
    <button
      onClick={onclick}
      className="flex gap-1 bg-Ros-50 font-medium w-48 capitalize border-stone-400 hover:border-orange-400 border rose-50 rounded-3xl  py-2 px-8 hover:text-orange-400"
    >
      <img src={cartIcon} alt="cart" />
      {children}
    </button>
  );
}
