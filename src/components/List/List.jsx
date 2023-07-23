import { Item } from "../Item/Item";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const WIDTH = 100;

export function List() {
  return (
    <>
      <button
        className={`pointer rounded border border-solid border-current bg-transparent p-3 w-[${WIDTH}px] m-8 text-salmon transition-colors hover:bg-salmon hover:text-white`}
        onClick={() => {
          alert(`Ilość emoji: ${emojis.length}`);
        }}
      >
        Pokaż liczbę emoji
      </button>
      <ul className="flex list-none gap-8 p-8">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
