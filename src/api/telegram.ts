export const getChatMember = async (id: number) => {
    const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/getChatMember`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: import.meta.env.VITE_CHAT_ID,
            user_id: id,
        }),
    });

    return response.json()
}