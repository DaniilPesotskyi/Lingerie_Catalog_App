import styled from "styled-components";
import type {IStyledComponent} from "@/types/components";

export const StyledWrapper = styled.div`
`

export const StyledContentContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    width: 100%;

    overflow: hidden;
    transition: var(--transition);
    
    ${({customStyles}) => customStyles || ""};
`

export const StyledToggleButton = styled.button`
    width: 100%;

    border: 0;
    background-color: transparent;
    font-size: 15px;
    padding: 5px;
    color: var(--selected-item-color);
`