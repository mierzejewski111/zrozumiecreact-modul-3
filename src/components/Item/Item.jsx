import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledItem = styled.li`
  background: salmon;
  padding: 30px 50px;
  border-radius: 20px;
  text-align: center;
`;

const StyledEmoji = styled.span`
  display: block;
  margin-bottom: 42px;
  transition: transform 0.3s;
  font-size: 32px;
  ${({ $zoomed }) => $zoomed && "transform: scale(2);"}
`;

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
