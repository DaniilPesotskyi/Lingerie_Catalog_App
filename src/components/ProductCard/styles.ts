import styled from "styled-components";

import {Link} from "react-router-dom";

export const StyledWrap = styled(Link)`
    display: block;
    
    padding: 10px;

    border-radius: var(--border-radius);
    // TODO: set telegram theme params
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

export const StyledTitle = styled.h3`
    
`

export const StyledSubtitle = styled.p`

`

export const StyledColorsList = styled.ul`
    
`

export const StyledColorItem = styled.li`

`

export const StyledPrices = styled.ul``