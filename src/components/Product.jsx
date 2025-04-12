import { flushSync } from "react-dom";
import Button from "./Button";

export default function Product({
  id,
  name,
  category,
  images,
  price,
  onSelect,
  deserts = [],
  onMinus,
}) {
  const grouped = deserts.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const quantity = grouped[id];

  let isSelected = false;
  if (deserts.includes(id)) {
    isSelected = true;
  }
  let imgClass1;
  if (isSelected) {
    imgClass1 =
      "hidden border-3 md:block w-full rounded-2xl border-orange-600  ease-in object-cover";
  } else {
    imgClass1 = "hidden md:block w-full rounded-2xl  ease-in object-cover";
  }
  return (
    <li className="overflow-hidden rounded-2xl" key={id}>
      <div className="relative">
        <img src={images.desktop} alt={name} className={imgClass1} />
        <img
          src={images.mobile}
          alt={name}
          className="block md:hidden w-full rounded-2xl object-cover"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <Button
            onMinus={() => onMinus(id)}
            isSelected={isSelected}
            onclick={onSelect}
          >
            {isSelected ? <>{quantity}</> : "add to cart"}
          </Button>
        </div>
      </div>
      <div>
        <div className="text-base mt-8">
          <p className="text-x text-Ros-400">{category}</p>
          <p className="text-base text-Ros-900 font-bold">{name}</p>
          <p className="text-xl font-semibold text-orange-700 ">${price}.00</p>
        </div>
      </div>
    </li>
  );
}
