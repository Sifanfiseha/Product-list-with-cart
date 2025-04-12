import Button from "./Button";

export default function Product({
  id,
  name,
  category,
  images,
  price,
  onSelect,
}) {
  return (
    <li className="overflow-hidden rounded-2xl" key={id}>
      <div className="relative">
        <img
          src={images.desktop}
          alt={name}
          className="hidden md:block w-full rounded-2xl  ease-in object-cover"
        />
        <img
          src={images.mobile}
          alt={name}
          className="block md:hidden w-full rounded-2xl object-cover"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <Button onclick={onSelect}>{"add to cart"}</Button>
        </div>
      </div>
      <div>
        <div className="text-base mt-8">
          <p className="text-x text-Ros-400">{category}</p>
          <p className="text-base text-Ros-900 font-bold">{name}</p>
          <p className="text-xl font-semibold text-orange-500 ">${price}.00</p>
        </div>
      </div>
    </li>
  );
}
