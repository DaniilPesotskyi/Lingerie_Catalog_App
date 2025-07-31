import type {FC, HTMLAttributes, ReactNode} from "react";

import type {IStyledComponent} from "@/types/components";

import {StyledIconButton} from "./styles.ts";

export interface IconButtonProps extends IStyledComponent, HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

const IconButton: FC<IconButtonProps> = ({children, ...props}) => {
    return (
        <StyledIconButton {...props}>
            {children}
        </StyledIconButton>
    )
}

export default IconButton;