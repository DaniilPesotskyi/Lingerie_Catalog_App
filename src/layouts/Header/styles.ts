import styled, {css} from "styled-components";

export const StyledHeader = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 20px 0;
    
    font-size: 26px;
`

export const filterButtonCustomStyles = css`
    position: fixed;
    top: 15px;
    right: 10px;

    width: fit-content;

    background-color: var(--bg-color);

    z-index: 2;
`