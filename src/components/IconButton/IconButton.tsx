import type { FC, ReactNode } from "react";

import type { IStyledComponent } from "@/types/components";

import { StyledIconButton } from "./styles.ts";

export interface IconButtonProps extends IStyledComponent, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
    return (
        <StyledIconButton {...props}>
            {children}
        </StyledIconButton>
    )
}

export default IconButton;