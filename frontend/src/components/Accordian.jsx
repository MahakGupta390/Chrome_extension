
import { useState, useRef, useEffect } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
        >
          {/* Accordion Button */}
          <button
            className={`w-full text-left px-4 py-3 transition-colors duration-300 ${
              openIndex === index ? "bg-yellow-100" : "bg-gray-100 hover:bg-gray-200"
            } focus:outline-none`}
            onClick={() => toggle(index)}
          >
            <span className="font-semibold">{item.title}</span>
          </button>

          {/* Collapsible Content */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
              transition: "max-height 0.4s ease, padding 0.4s ease",
              overflow: "hidden",
            }}
            className="px-4 bg-white text-gray-700"
          >
            <p className="py-3">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
