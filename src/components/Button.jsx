import cartIcon from "../assets/images/icon-add-to-cart.svg";
import plus from "../assets/images/icon-increment-quantity.svg";
import minus from "../assets/images/icon-decrement-quantity.svg";

export default function Button({ onMinus, children, onclick, isSelected }) {
  let classes;

  if (isSelected) {
    classes =
      "flex items-center justify-between  gap-1 bg-orange-600 font-medium w-48 capitalize border-none text-white border rose-50 rounded-3xl  py-2 px-8  text-center";
  } else {
    classes =
      "flex  gap-1 bg-Ros-50 font-medium w-48 capitalize border-stone-400 hover:border-orange-700 border rose-50 rounded-3xl  py-2 px-8 hover:text-orange-700";
  }
  return (
    <div className="w-49">
      {isSelected ? (
        <>
          <div className="flex bg-orange-600 h-[42px] text-white font-semibold rounded-3xl  py-2 px-8 w-full items-center justify-between">
            <button
              onClick={onMinus}
              className="border-1 cursor-pointer border-white rounded-4xl p-1 w-4 h-4 hover:bg-Ros-50"
            >
              <img src={minus} alt="minus" />
            </button>
            {children}
            <button
              onClick={onclick}
              className="border-1 cursor-pointer   border-white rounded-4xl p-1 w-4 h-4 active:bg-Ros-50"
            >
              <img className="stroke-Ros-900" src={plus} alt="plus" />
            </button>
          </div>
        </>
      ) : (
        <>
          <button onClick={onclick} className={classes}>
            <img src={cartIcon} alt="cart" />
            {children}
          </button>
        </>
      )}
    </div>
  );
}
