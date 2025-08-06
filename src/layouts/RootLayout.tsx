import {Outlet} from "react-router-dom";

import {useTelegram} from "@/hooks";
import {useEffect} from "react";

const RootLayout = () => {
    const {telegram} = useTelegram()

    useEffect(() => {
        telegram.enableClosingConfirmation()
        telegram.disableVerticalSwipes()
        telegram.MainButton.setParams({color: '#25b672'})
        telegram.lockOrientation()
        telegram.expand()
    }, []);

    return (
        <>
            <Outlet/>
        </>
    )
}

export default RootLayout