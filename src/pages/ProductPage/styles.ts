import styled, {css} from "styled-components";

export const StyledTitle = styled.h1`
    margin-bottom: 4px;

    font-size: 24px;
    font-weight: 500;
`

export const StyledArticle = styled.p`
    margin-bottom: 15px;

    font-size: 18px;
    color: var(--secondary-text-color);
`

export const StyledSubTitle = styled.h2`
    margin: 0 0 4px 4px;

    font-size: 14px;
    font-weight: 400;
    color: var(--secondary-text-color);
`

export const designsCustomStyles = css`
    margin-bottom: 10px;
`

export const StyledMaterial = styled.p`
    margin-bottom: 10px;
`

export const StyledPrices = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    margin-bottom: 10px;

    border-radius: var(--border-radius);
    background-color: var(--secondary-bg-color);
`

export const StyledPriceItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3px;

    height: 60px;
`

export const StyledPriceLabel = styled.h3`
    font-size: 12px;
    font-weight: 400;
    color: var(--secondary-text-color);
`

export const StyledPriceValue = styled.p<{ discount?: boolean }>`
    font-size: 18px;
    font-weight: 500;
`

export const StyledActions = styled.div`
    display: flex;
    gap: 5px;

    margin-bottom: 10px;
`