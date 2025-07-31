import styled, {css} from "styled-components";

import type {IStyledComponent} from "@/types/components";

import type {ButtonVariantsType} from "./Button.tsx";

interface IStyledButtonProps extends IStyledComponent {
    variant: ButtonVariantsType
}

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles' && prop !== 'variant'
})<IStyledButtonProps>`
    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: 40px;

    padding: 0 7px;

    border-radius: var(--border-radius);

    font-family: inherit;
    font-size: 16px;
    color: var(--text-color);

    ${({variant}) => variant === 'outlined' && css`
        border: 1px solid var(--separator-color);
        background-color: transparent;
    `}

    ${({variant}) => variant === 'transparent' && css`
        border: 0;
        background-color: transparent;
    `}

    ${({variant}) => variant === 'contained' && css`
        border: 0;
        background-color: var(--accent-color);
        color: var(--tg-theme-button-text-color);
    `}

    ${({customStyles}) => customStyles || ""}

`