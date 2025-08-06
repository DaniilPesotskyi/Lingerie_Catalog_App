import {useEffect} from "react";
import {motion} from "framer-motion";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import {useTelegram} from "@/hooks";

import type {IProductExtended} from "@/types/product";

import {getProductById} from "@/api/products.ts";

import ColorItem from "./ColorItem/ColorItem.tsx";

import {
    StyledRemainsContainer,
    StyledRemainsHeading,
    StyledRemainsArticle,
    StyledRemainsTitle,
    StyledRemainsList
} from "./styles.ts";

const variants = {
    hidden: {
        y: '100%',
    },
    visible: {
        y: 0,
    },
}

const RemainsPage = () => {
    const {id} = useParams()
    const {telegram, showMainButton, hideMainButton} = useTelegram()

    const {data: product} = useQuery<IProductExtended>({
        queryKey: ['product', id],
        queryFn: async () => await getProductById(id as string),
    })

    useEffect(() => {
        document.body.classList.add('no-scroll')
        telegram.setHeaderColor('secondary_bg_color')
        hideMainButton()
        return () => {
            document.body.classList.remove('no-scroll')
            telegram.setHeaderColor('bg_color')
            showMainButton()
        }
    }, [])

    if (!product) return null;

    const variations = product.variations

    const variationsByColors = variations.reduce((acc, variation) => {
        const color = variation.color;
        if (variation.available) {
            if (!acc[color]) {
                acc[color] = [];
            }
            acc[color].push(variation);
        }
        return acc;
    }, {} as Record<string, IProductExtended['variations']>);

    const colorsLength = Object.keys(variationsByColors).length;

    return (
        <StyledRemainsContainer
            as={motion.div}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{duration: 0.2}}
            variants={variants}
        >
            <StyledRemainsHeading>
                <StyledRemainsTitle>
                    Наявність
                </StyledRemainsTitle>
                <StyledRemainsArticle>
                    {id}
                </StyledRemainsArticle>
            </StyledRemainsHeading>
            <StyledRemainsList>
                {Object.keys(variationsByColors).map(color => (
                    <li key={color}>
                        <ColorItem
                            color={color}
                            items={variationsByColors[color]}
                            isDefaultOpen={colorsLength <= 2}
                        />
                    </li>
                ))}
            </StyledRemainsList>
        </StyledRemainsContainer>
    )
}

export default RemainsPage