import styled from "styled-components";

import type {IStyledComponent} from "@/types/components";

const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'customStyles'
})<IStyledComponent>`
    padding: 0 10px;

    ${({customStyles}) => customStyles || ""};
`

export default Container;