import {useEffect} from "react";
import {motion} from "framer-motion";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import {useTelegram} from "@/hooks";

import type {IProductExtended} from "@/types/product";

import {getProductById} from "@/api/products.ts";

import {useRemainsFilters} from "@/context/RemainsFilterContext.tsx";

import ColorItem from "./ColorItem/ColorItem.tsx";
import RemainsFilter from "./RemainsFilter/RemainsFilter.tsx";

import {
    StyledRemainsContainer,
    StyledRemainsHeading,
    StyledRemainsArticle,
    StyledRemainsTitle,
    StyledRemainsList, StyledEmptyText
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

    const {filters} = useRemainsFilters()

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

    const filteredByColors = filters.colors.length
        ? Object.entries(variationsByColors).filter(([color]) => filters.colors.includes(color))
        : Object.entries(variationsByColors)

    const filteredVariations = filters.sizes.length
        ? filteredByColors.map(([color, variations]) => [
            color,
            variations.filter(variation => filters.sizes.includes(variation.size))
        ]).filter(([, variations]) => variations.length > 0)
        : filteredByColors

    const variationsToRender = Object.fromEntries(filteredVariations)

    const defaultOpen = colorsLength <= 2 || (filters.sizes.length > 0 && filters.sizes.length < 6)

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

            <RemainsFilter variations={variations}/>

            <StyledRemainsList>
                {Object.keys(variationsToRender).length > 0 ? (
                    <>
                        {Object.keys(variationsToRender).map(color => (
                            <li key={color}>
                                <ColorItem
                                    color={color}
                                    items={variationsToRender[color]}
                                    isDefaultOpen={defaultOpen}
                                />
                            </li>
                        ))}
                    </>
                ) : (
                    <StyledEmptyText>Такого немає в наявності :(</StyledEmptyText>
                )}

            </StyledRemainsList>
        </StyledRemainsContainer>
    )
}

export default RemainsPage