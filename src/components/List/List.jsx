import { Item } from "../Item/Item";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
    padding: 30px;
`;

const StyledItem = styled(Item)`
    margin-right: 30px;
`;

export function List() {
    return (
        <>
            <button
                onClick={() => {
                    alert(`Ilość emoji: ${emojis.length}`);
                }}
            >
                Pokaż liczbę emoji
            </button>
            <ul>
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji} />
                ))}
            </ul>
        </>
    );
}
