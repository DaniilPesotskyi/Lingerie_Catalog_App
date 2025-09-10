import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useTelegram, useStats } from "@/hooks";

import { useSession } from "@/context/SessionContext";

const RootLayout = () => {
    const { telegram, user } = useTelegram()
    const { session, setSession } = useSession()
    const { sendStat } = useStats()

    const location = useLocation()
    const navigate = useNavigate()

    const queryParams = new URLSearchParams(location.search)

    useEffect(() => {

        const session = user.id.toString() + '-' + new Date().getTime().toString()
        setSession(session)

        telegram.enableClosingConfirmation()
        telegram.disableVerticalSwipes()
        telegram.MainButton.setParams({ color: '#25b672' })
        telegram.lockOrientation()
        telegram.expand()
    }, []);

    useEffect(() => {
        if (session) {
            sendStat({
                action: 'start',
                comment: 'no comment'
            });
        }
    }, [session, sendStat]);

    useEffect(() => {
        const command = queryParams.get("tgWebAppStartParam") ? queryParams.get("tgWebAppStartParam") : "";
        if (command) {
            navigate(command.replaceAll('_', '%20'))
        }
    }, []);

    return (
        <>
            <Outlet />
        </>
    )
}

export default RootLayout