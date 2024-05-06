import Background from "./Background";

export default function Home() {
  return (
    <div className="relative h-screen bg-[#fae6cf]">
      <Background />
      <main className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Hello World</h1>
      </main>
    </div>
  );
}
