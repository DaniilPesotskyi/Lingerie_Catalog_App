import type {FC, HTMLAttributes, ReactNode} from "react";

import type {IStyledComponent} from "@/types/components";

import {StyledButton} from "./styled.ts";

export type ButtonVariantsType = 'outlined' | 'contained' | 'transparent';

interface IButtonProps extends IStyledComponent, HTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariantsType

    children?: ReactNode;
}

const Button: FC<IButtonProps> = ({children, variant, ...props}) => {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    )
}

export default Button