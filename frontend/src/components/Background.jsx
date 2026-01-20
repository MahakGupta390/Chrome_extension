import { useEffect, useState } from "react";
import forest from "/forest.avif";
import ocean from "/ocean.avif";
import sunrise from "/sunrise.avif";

const images = [forest, ocean, sunrise];

export default function Background() {
//   const [bg, setBg] = useState(images[0]);

//   useEffect(() => {
//     const random = images[Math.floor(Math.random() * images.length)];
//     setBg(random);
//   }, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="absolute inset-0 -z-0 bg-cover bg-center scale-105 transition-all duration-100"
      style={{ backgroundImage: `url(${images[index]})` }}
    />
  );
}
