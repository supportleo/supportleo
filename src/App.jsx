import { useState } from "react";

export default function App() {
  const images = [
    "/Shady and Leo 1.webp",
    "/Shady and Leo 2.jpeg",
    "/Shady and Leo 3.jpeg",
    "/Shady and Leo 4.jpeg",
    "/Shady and Leo 5.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-sky-50 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Support Leo After the Loss of His Mother
        </h1>

        <div className="relative">
          <img
            src={images[current]}
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <button onClick={prev} className="absolute left-2 top-1/2 bg-white p-2 rounded-full">◀</button>
          <button onClick={next} className="absolute right-2 top-1/2 bg-white p-2 rounded-full">▶</button>
        </div>
      </div>
    </div>
  );
}
