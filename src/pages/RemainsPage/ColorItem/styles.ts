import styled, {css} from "styled-components";

export const toggleButtonStyles = css`
    text-transform: capitalize;
    font-weight: 500;
`

export const ColorBox = styled.div`
    width: 17px;
    height: 17px;
    
    border-radius: 50%;
`

export const StyledOpenIndicator = styled.span`
    margin-left: auto;
    
    font-size: 22px;
    font-weight: 400;
`

export const StyledSizesList = styled.ul`
    padding: 10px 0;

    border-radius: var(--border-radius);
    background-color: var(--bg-color);
`

export const StyledSizeItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 15px;

    &:not(:last-child) {
        border-bottom: 1px solid var(--separator-color);
    }
`

export const StyledAvailable = styled.span`
    color: var(--success-color)
`

export const StyledUnavailable = styled.span`
    color: var(--danger-color);
`