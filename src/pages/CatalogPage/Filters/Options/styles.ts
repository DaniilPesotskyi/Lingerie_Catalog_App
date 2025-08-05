import styled, {css} from "styled-components";

export const StyledOptionsHeading = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 20px 0;
    
    background-color: var(--secondary-bg-color);
    
    z-index: 1;
`

export const StyledOptionTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
`

export const StyledOptionsList = styled.ul`
    border-radius: var(--border-radius);
    background-color: var(--bg-color);

    overflow: hidden;

    & > li:not(:last-child) {
        border-bottom: 1px solid var(--separator-color);
    }
`

export const StyledOptionsButton = styled.button<{active: boolean}>`
    position: relative;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;
    padding: 0 10px 0 20px;

    border: 0;
    background-color: var(--bg-color);

    font-size: 16px;
    color: var(--text-color);

    opacity: ${({disabled}) => (disabled ? 0.3 : 3)};
    
    ${({active}) => active && css`
        background-color: var(--selected-item-bg-color);
        color: var(--selected-item-color);
    `};

    &::after {
        content: ' ';

        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);

        width: 20px;
        height: 20px;

        border-radius: 50%;
        background-color: ${({active}) => active ? 'var(--selected-item-color)' : 'transparent'};
    }

    ${({disabled}) => disabled && css`
        &::before {
            content: 'недоступний';

            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);

            color: #A80000;
        }
    `}
`