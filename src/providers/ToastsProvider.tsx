import type {FC, ReactNode} from "react";
import {Toaster} from "react-hot-toast";

interface IToastsProviderProps {
    children: ReactNode;
}

const ToastsProvider: FC<IToastsProviderProps> = ({children}) => {
    return (
        <>
            {children}
            <Toaster/>
        </>
    )
}

export default ToastsProvider