import colorsHex from "@/constants/colorsHex";

const getColorBackground = (color: string) => {

    const colors = colorsHex[color]

    if (!colors) {
        return 'transparent'
    }

    if (colors.length === 1) {
        return colors[0]
    }

    const percentPerStep = 100 / colors.length

    const steps = colors
        .flatMap((c, i) => {
            const start = percentPerStep * i;
            const end = percentPerStep * (i + 1);
            return [`${c} ${start}%`, `${c} ${end}%`];
        })
        .join(", ");

    return `linear-gradient(90deg, ${steps})`;
}

export default getColorBackground