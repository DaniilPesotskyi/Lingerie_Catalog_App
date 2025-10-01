import type { FC } from "react";

import { SendIcon } from "@/icons";

import { IconButton } from "@/components";
import { useMutation } from "@tanstack/react-query";
import { telegramService } from "@/services";
import toast from "react-hot-toast";
import { useTelegram } from "@/hooks";

interface ISendButtonProps {
    photoUrl: string;
}

const SendButton: FC<ISendButtonProps> = ({ photoUrl }) => {
    const { user } = useTelegram()
    const {
        mutateAsync,
        isPending,
    } = useMutation({
        mutationFn: () => telegramService.sendCaptionMessage(user.id, photoUrl),
        onSuccess: () => {
            toast.success('Відправлено')
        },
        onError: () => {
            toast.error('Помилка :(')
        },
    })

    return (
        <IconButton onClick={() => mutateAsync()} disabled={isPending}>
            <SendIcon />
        </IconButton>
    )
}

export default SendButton;