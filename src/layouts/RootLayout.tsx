import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useTelegram } from "@/hooks";

import { statsService } from "@/services";

const RootLayout = () => {
    const { telegram, user } = useTelegram()
    const location = useLocation()
    const navigate = useNavigate()

    const queryParams = new URLSearchParams(location.search)

    useEffect(() => {

        const time = new Date().toTimeString().slice(0, 5)
        statsService.sendStat(user, telegram.platform, time)

        telegram.enableClosingConfirmation()
        telegram.disableVerticalSwipes()
        telegram.MainButton.setParams({ color: '#25b672' })
        telegram.lockOrientation()
        telegram.expand()
    }, []);

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