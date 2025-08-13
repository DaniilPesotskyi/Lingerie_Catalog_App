import type {IUser} from "@/types/user";

export const sendStat = async (user: IUser, platform: string, time: string) => {
    try {
        const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                time: time,
                id: user.id,
                name: user.first_name,
                platform: platform,
                comment: 'comment'
            })
        });

        const result = await response.text();
        const parsed = JSON.parse(result);

        console.log('res:', parsed);
        return parsed;

    } catch (error) {
        console.error('error:', error);
        throw error;
    }
}