import styled from "styled-components";

import type {IStyledComponent} from "@/types/components";

export const StyledCollapse = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    ${({customStyles}) => customStyles || ""}
`