import styled, {css} from "styled-components";

export interface StyledExpandableTextTypes {
    customStyles?: ReturnType<typeof css>
}

export const StyledExpandableText = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<StyledExpandableTextTypes, {open: boolean}>`
    ${({customStyles}) => customStyles || ""}
`

export const ToggleButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<StyledExpandableTextTypes>`
    ${({customStyles}) => customStyles || ""}

    display: inline-block;

    padding: 0;

    border: none;
    background-color: transparent;

    color: var(--selected-item-color);
    font-style: italic;
`