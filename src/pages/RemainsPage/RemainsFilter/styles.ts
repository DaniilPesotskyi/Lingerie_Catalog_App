import styled, {css} from "styled-components";

export const StyledFilterTitle = styled.p`
    margin: 0 0 10px 10px;
    
    font-size: 14px;
    color: var(--secondary-text-color);
`

export const StyledFiltersList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    
    margin-bottom: 10px;
`

export const StyledSizeFilter = styled.button<{active: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 30px;
    padding: 0 10px;
    
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    background-color: var(--bg-color);
    
    color: var(--text-color);
    
    ${({ active }) => active && css`
        border: 1px solid var(--selected-item-color);
        background-color: var(--selected-item-bg-color);
        
        color: var(--selected-item-color);
    `}
`

export const StyledColorFilter = styled.button<{active: boolean}>`
    width: 30px;
    height: 30px;

    border: 2px solid transparent;
    border-radius: 50%;

    ${({ active }) => active && css`
        border: 2px solid var(--selected-item-color);
    `}
`

export const clearButtonCustomStyles = css`
    justify-content: center;
    
    height: 35px;
    margin-bottom: 10px;
    
    background-color: var(--danger-color);
    
    font-size: 15px;
`

export const toggleButtonCustomStyles = css`
    justify-content: center;
`