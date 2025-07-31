// @ts-ignore
const telegram = window.Telegram.WebApp;

import type {IUser} from "@/types/user";

const useTelegram = () => {
    const user = telegram.initDataUnsafe.user as IUser

    const addMainButtonHandler = (handler: () => void, text?: string) => {
        telegram.MainButton.setText(text);
        telegram.MainButton.onClick(handler)
        return () => {
            telegram.MainButton.offClick(handler)
        }
    }

    const showMainButton = () => {
        telegram.MainButton.show();
    }

    const hideMainButton = () => {
        telegram.MainButton.hide()
    }

    const disableMainButton = () => {
        telegram.MainButton.disable()
        telegram.MainButton.setParams({
            color: '#8a8a8a'
        })
    }

    const enableMainButton = () => {
        telegram.MainButton.enable()
        telegram.MainButton.setParams({
            color: '#25b672'
        })
    }

    const addBackButtonHandler = (handler: () => void) => {
        telegram.BackButton.onClick(handler)
        return () => {
            telegram.BackButton.offClick(handler)
        }
    }

    const showBackButton = () => {
        telegram.BackButton.show();
    }

    const hideBackButton = () => {
        telegram.BackButton.hide()
    }

    return {
        telegram,
        user,
        theme: telegram.themeParams,

        addMainButtonHandler,
        showMainButton,
        hideMainButton,
        disableMainButton,
        enableMainButton,

        addBackButtonHandler,
        showBackButton,
        hideBackButton
    }
}

export default useTelegram
