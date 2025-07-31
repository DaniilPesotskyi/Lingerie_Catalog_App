import styled from "styled-components";

import type {IStyledComponent} from "@/types/components";

export const StyledIconButton = styled.button.withConfig({
    shouldForwardProp: prop => prop !== 'customStyles'
})<IStyledComponent>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    
    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent;

    ${({customStyles}) => customStyles || ""}
`