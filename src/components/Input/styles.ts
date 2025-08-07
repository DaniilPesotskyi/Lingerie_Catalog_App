import styled from "styled-components";

import type {IStyledComponent} from "@/types/components";

export const StyledInput = styled.input.withConfig({
    shouldForwardProp: prop => prop !== "customStyles",
})<IStyledComponent>`
    width: 100%;
    height: 40px;
    padding: 0 10px;

    border: 1px solid var(--separator-color);
    outline: 0;
    border-radius: var(--border-radius);
    background-color: var(--bg-color);

    font-size: 16px;
    color: var(--text-color);

    ${({customStyles}) => customStyles || ''}
`