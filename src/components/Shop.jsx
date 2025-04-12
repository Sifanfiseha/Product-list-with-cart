export default function Shop({ children }) {
  return (
    <section>
      <h2 className="text-3xl mb-8 text-Ros-900 font-bold">Desserts</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {children}
      </ul>
    </section>
  );
}
