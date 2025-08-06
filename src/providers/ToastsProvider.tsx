import type {FC, ReactNode} from "react";
import {Toaster} from "react-hot-toast";

interface IToastsProviderProps {
    children: ReactNode;
}

const ToastsProvider: FC<IToastsProviderProps> = ({children}) => {
    return (
        <>
            {children}
            <Toaster
                containerStyle={{
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                }}
            />
        </>
    )
}

export default ToastsProvider