import {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

import {useTelegram} from "@/hooks";

const RootLayout = () => {
    const {telegram} = useTelegram()
    const location = useLocation()
    const navigate = useNavigate()

    const queryParams = new URLSearchParams(location.search)

    useEffect(() => {
        telegram.enableClosingConfirmation()
        telegram.disableVerticalSwipes()
        telegram.MainButton.setParams({color: '#25b672'})
        telegram.lockOrientation()
        telegram.expand()
    }, []);

    useEffect(() => {
        const command = queryParams.get("tgWebAppStartParam") ? queryParams.get("tgWebAppStartParam") : "";
        if (command) {
            navigate(command)
        }
    }, []);

    return (
        <>
            <Outlet/>
        </>
    )
}

export default RootLayout