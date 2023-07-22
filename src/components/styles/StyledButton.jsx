import styled from "styled-components";

const WIDTH = 100;

export const StyledButton = styled.button`
    color: ${({ $primary }) => ($primary ? "salmon" : "white")};
    background: transparent;
    border: solid 1px;
    padding: 12px;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;
    cursor: pointer;
    width: ${WIDTH}px;
    margin: ${({ $margin = 0 }) => `${$margin}px`};

    &:hover {
        color: ${({ $primary }) => ($primary ? "white" : "salmon")};
        background: ${({ $primary }) => ($primary ? "salmon" : "white")};
    }
`;
