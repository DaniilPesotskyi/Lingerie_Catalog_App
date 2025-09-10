import {createContext, type FC, type ReactNode, useCallback, useContext, useEffect, useState} from "react";

import { telegramService } from "@/services";

interface IUserContext {
    user: { id: number },
    hasAccess: boolean,
    isLoading: boolean,
}

interface IUserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<IUserContext | undefined>(undefined)

export const UserContextProvider: FC<IUserProviderProps> = ({children}) => {
    const user = {id: 397318419}

    const [hasAccess, setHasAccess] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const checkAccess = useCallback(async (): Promise<void> => {
        if (!user?.id) {
            setHasAccess(false);
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const response = await telegramService.getChatMember(user.id);
            const memberStatus = response.result.status;

            const hasValidAccess = !['kicked', 'left'].includes(memberStatus);
            setHasAccess(hasValidAccess);

        } catch {
            setHasAccess(false);
        } finally {
            setIsLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        checkAccess();
    }, [checkAccess]);

    return (
        <UserContext.Provider value={{user, hasAccess, isLoading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within an Provider");
    }
    return context;
}