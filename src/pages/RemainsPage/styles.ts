import styled from "styled-components";

export const StyledRemainsContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    padding: 0 10px;

    background-color: var(--secondary-bg-color);

    z-index: 1;

    overflow: auto;
`

export const StyledRemainsHeading = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding: 6px 0;
    
    background-color: var(--secondary-bg-color);
`

export const StyledRemainsTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
`

export const StyledRemainsArticle = styled.p`
    font-size: 14px;
    color: var(--secondary-text-color);
`

export const StyledRemainsList = styled.ul`
`

export const StyledEmptyText = styled.p`
    width: 100%;
    margin-top: 30px;
    
    font-size: 18px;
    color: var(--text-color);
    text-align: center;
`

