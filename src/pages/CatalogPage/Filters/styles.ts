import styled from "styled-components";

export const StyledFiltersWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);

    width: 100%;
    height: 100%;
    padding: 0 10px 10px 10px;

    background-color: var(--bg-color);

    overflow: hidden;
    z-index: 999;
    transition: var(--transition);

    body.menu-open & {
        transform: translateX(0);
    }
`

export const StyledHeading = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 20px 0;
`

export const StyledTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

export const StyledPickerWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 0 10px;
    
    background-color: var(--bg-color);

    overflow: scroll;
`