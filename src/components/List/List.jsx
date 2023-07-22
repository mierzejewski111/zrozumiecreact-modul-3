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
            <StyledButton
                $primary
                $margin={30}
                onClick={() => {
                    alert(`Ilość emoji: ${emojis.length}`);
                }}
            >
                Pokaż liczbę emoji
            </StyledButton>
            <StyledList>
                {emojis.map((emoji) => (
                    <StyledItem key={emoji} emoji={emoji} />
                ))}
            </StyledList>
        </>
    );
}
