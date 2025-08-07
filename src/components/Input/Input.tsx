import type {FC, InputHTMLAttributes} from "react";

import type {IStyledComponent} from "@/types/components";
import {StyledInput} from "@/components/Input/styles.ts";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>, IStyledComponent {}

const Input: FC<IInputProps> = ({...props}) => {
    return (
        <StyledInput {...props} />
    )
}

export default Input