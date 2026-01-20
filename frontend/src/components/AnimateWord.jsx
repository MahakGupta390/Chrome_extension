// import { useState, useEffect } from "react";

// export default function AnimatedWord({ words, interval = 1500 }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, interval);

//     return () => clearInterval(timer); // cleanup on unmount
//   }, [words, interval]);

//   return (
//     <span className="inline-flex justify-center min-w-[12ch] text-yellow-400 font-bold text-left transition-opacity duration-300">
//       {words[index]}
//     </span>
//   );
// }


import { useEffect, useState } from "react";

const words = [
  "productive",
  "focused",
  "goal-driven",
  "creative",
];

export default function AnimatedWord() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }, 90);
    } else {
      // deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-flex justify-center min-w-[12ch] text-yellow-400 font-bold text-left transition-opacity duration-300">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
