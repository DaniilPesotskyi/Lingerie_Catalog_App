import styled from "styled-components";

export const StyledGalleryContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
    padding: 20px 0;

    background-color: #000000;

    z-index: 1;

    overflow: auto;
`

export const StyledContentSelect = styled.select`
    display: block;
    
    position: sticky;
    top: -15px;
    
    width: fit-content;
    min-width: 250px;
    padding: 7px 15px;
    margin: 0 auto 20px auto;

    border-radius: var(--border-radius);
    background-color: var(--bg-color);

    font-size: 16px;
    color: var(--text-color);
    text-transform: capitalize;

    .&::-ms-expand {
        display: none;
    }
`

export const StylesPhotosList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const StyledEmptyText = styled.p`
    width: 100%;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
`