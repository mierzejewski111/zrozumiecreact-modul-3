import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li className="rounded-3xl bg-salmon px-12 py-8 text-center">
      <span
        className={`mb-11 block text-3xl transition-transform ${
          zoomed ? "scale-[2]" : ""
        }`}
      >
        {emoji}
      </span>
      <button
        className={`pointer w-[100px] rounded border border-solid border-current bg-transparent p-3 text-white transition-colors hover:bg-white hover:text-salmon`}
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}
