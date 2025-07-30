
import styled from "styled-components";

import type {IStyledComponent} from "@/types/components";

export const StyledWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    z-index: 9999;

    ${({customStyles}) => customStyles || ""};
`

export const StyledSpinner = styled.span`
    display: block;

    width: 40px;
    height: 40px;

    border: 7px solid var(--secondary-bg-color);
    border-top: 7px solid var(--accent-color);
    border-radius: 50%;
`
