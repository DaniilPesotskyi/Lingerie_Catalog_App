import colorTranslations from "@/constants/colorTranslations.ts";

const getColorTranslation = (color: string, lang: string = 'uk') => {
    if(!colorTranslations[color] || !colorTranslations[color][lang]) {
        return 'Невідомий колір'
    }

    return colorTranslations[color][lang]
}

export default getColorTranslation