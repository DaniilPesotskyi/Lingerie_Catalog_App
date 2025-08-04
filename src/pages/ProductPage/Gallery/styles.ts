import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledGallery = styled.div`
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