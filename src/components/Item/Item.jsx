import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

const StyledItem = styled.li`
    text-align: center;
    border-radius: 20px;
    padding: 30px 50px;
    background: salmon;
`;

const StyledEmoji = styled.span`
    display: block;
    font-size: 32px;
    margin-bottom: 42px;
    transition: transform 0.3s;
    ${({ $zoomed }) => $zoomed && "transform: scale(2);"}
`;

export function Item({ emoji, className }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <StyledItem className={className}>
            <StyledEmoji $zoomed={zoomed}>{emoji}</StyledEmoji>
            <StyledButton
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </StyledButton>
        </StyledItem>
    );
}
