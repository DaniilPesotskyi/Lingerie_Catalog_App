import styled, {css} from "styled-components";

import {Link} from "react-router-dom";

export const StyledWrap = styled(Link)`
    display: block;

    padding: 10px;

    border-radius: var(--border-radius);
    background-color: var(--secondary-bg-color);
`

export const StyledHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledImage = styled.img`
    width: 100px;
    height: auto;

    border-radius: var(--border-radius);
`

export const NoImageStub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 75px;
`

export const StyledTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 3px;
`

export const StyledArticle = styled.p`
    margin-bottom: 6px;

    font-size: 16px;
    color: var(--secondary-text-color);
`

export const StyledColorsList = styled.ul`
    display: flex;
    gap: 5px;
`

export const StyledColorItem = styled.li`
    width: 15px;
    height: 15px;

    border-radius: var(--border-radius);
`

export const designsListStyles = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    
    margin-top: 10px;
`

export const StyledDesignItem = styled.li`
    padding: 3px 5px;

    border: 1px solid var(--separator-color);
    border-radius: var(--border-radius);
    background-color: var(--bg-color);

    font-size: 14px;
    color: var(--secondary-text-color);
`

export const StyledPrices = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    height: 60px;
    margin-top: 10px;

    border-radius: var(--border-radius);
    background-color: var(--bg-color);
`

export const StyledPriceItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const StyledPriceLabel = styled.h4`
    font-size: 12px;
    font-weight: 400;
`

export const StyledPriceValue = styled.p`
    font-size: 16px;
    font-weight: 500;
`