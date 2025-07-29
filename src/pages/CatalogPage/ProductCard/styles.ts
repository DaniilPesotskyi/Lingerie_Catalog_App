import styled from "styled-components";

import {Link} from "react-router-dom";

export const StyledWrap = styled(Link)`
    display: block;

    padding: 10px;

    border-radius: var(--border-radius);
    background-color: #f3f3f3;
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
`

export const StyledColorsList = styled.ul`
    display: flex;
    gap: 5px;
`

export const StyledColorItem = styled.li`
    width: 15px;
    height: 15px;

    border-radius: var(--border-radius);
    background-color: #00A841;
`

export const StyledPrices = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    height: 60px;
    margin-top: 10px;

    border-radius: var(--border-radius);
    background-color: #ffffff;
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