import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const StyledGallery = styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 270px;
    margin-bottom: 10px;
`

export const StyledImageWrap = styled(Link)`
    position: relative;

    display: block;
    
    width: fit-content;
    height: fit-content;
    
    border-radius: var(--border-radius);

    overflow: hidden;
`

export const loaderCustomStyles = css`
    position: absolute;
    bottom: 50%;
    transform: translateY(-50%);
`