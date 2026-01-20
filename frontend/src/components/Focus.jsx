export default function Focus() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="text-center text-white">
      <h1 className="text-6xl font-light">{greeting}</h1>
      <p className="mt-4 text-xl opacity-90">
        What’s your main focus today?
      </p>
    </div>
  );
}
