import { createContext, useContext, useState } from "react";

interface ISessionContext {
    session: string;
    setSession: (session: string) => void;
}

interface ISessionProviderProps {
    children: React.ReactNode;
}

const SessionContext = createContext<ISessionContext | undefined>(undefined)

export const SessionContextProvider: React.FC<ISessionProviderProps> = ({ children }) => {
    const [session, setSession] = useState<string>('')

    return (
        <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>
    )
}

export const useSession = () => {
    const context = useContext(SessionContext)
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider')
    }
    return context
}