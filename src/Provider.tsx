import {type FC, type ReactNode} from "react";

import {UserContextProvider} from "@/context/UserContext.tsx";

import QueryProvider from "@/providers/QueryProvider.tsx";
import ToastsProvider from "@/providers/ToastsProvider.tsx";

interface IProviderProps {
    children: ReactNode;
}

const Provider: FC<IProviderProps> = ({children}) => {
    return (
        <>
            <QueryProvider>
                <ToastsProvider>
                    <UserContextProvider>
                        {children}
                    </UserContextProvider>
                </ToastsProvider>
            </QueryProvider>
        </>
    )
}

export default Provider