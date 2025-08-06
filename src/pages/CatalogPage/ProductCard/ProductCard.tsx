import {type FC, memo} from "react";
import {useSearchParams} from "react-router-dom";

import type {IProductPreview} from "@/types/product";

import {useUser} from "@/context/UserContext.tsx";

import {getColorBackground, getDiscountPrice} from "@/utils";

import {NoPhotographyIcon} from "@/icons";

import {
    StyledWrap,
    StyledHeading,
    StyledImage,
    StyledTitle,
    StyledArticle,
    StyledColorsList,
    StyledColorItem,
    StyledPrices,
    StyledPriceItem,
    StyledPriceLabel,
    StyledPriceValue, NoImageStub, designsListStyles, StyledDesignItem, StyledBeforePriceValue
} from "./styles.ts";

import {ExpandableContent} from "@/components";

interface IProductCardProps {
    item: IProductPreview
}

const ProductCard: FC<IProductCardProps> = ({item}) => {
    const [searchParams] = useSearchParams()
    const {hasAccess} = useUser()

    const name = item.name.replace(/\s*\(.*?\)\s*/g, '')

    const wholePrice = item.price && item.discount ? getDiscountPrice(item.price, item.discount) : item.price
    const dropPrice = item.price_d && item.discount ? getDiscountPrice(item.price_d, item.discount) : item.price_d
    const retailPrice = item.price_r

    const designs = item.design?.split(',').filter((item) => item !== ' ' && item !== '') || []
    const activeDesigns = searchParams.getAll('designs')

    const hasDiscount = Boolean(item.discount)

    return (
        <StyledWrap to={`/${item.article}?${searchParams.toString()}`}>
            <StyledHeading>
                {item.photo_example ? (
                    <StyledImage src={item.photo_example || ''} alt="photo example"/>
                ) : (
                    <NoImageStub>
                        <NoPhotographyIcon/>
                    </NoImageStub>
                )}
                <div>
                    <StyledTitle>{name} {item.brand}</StyledTitle>
                    {hasAccess && (
                        <StyledArticle>
                            {item.article}
                        </StyledArticle>
                    )}
                    <StyledColorsList>
                        {item.colors.map((color) => (
                            <StyledColorItem style={{background: getColorBackground(color)}} key={color}/>
                        ))}
                    </StyledColorsList>
                </div>
            </StyledHeading>
            <ExpandableContent component={'ul'} maxHeight={55} customStyles={designsListStyles}>
                {designs.map((item) => (
                    <StyledDesignItem active={activeDesigns.includes(item.trim())}>{item}</StyledDesignItem>
                ))}
            </ExpandableContent>
            {hasAccess && (
                <StyledPrices>
                    <StyledPriceItem>
                        <StyledPriceLabel>ОПТ</StyledPriceLabel>
                        <StyledPriceValue discount={hasDiscount}>{wholePrice}</StyledPriceValue>
                        {hasDiscount && (
                            <StyledBeforePriceValue>{item.price}</StyledBeforePriceValue>
                        )}
                    </StyledPriceItem>
                    <StyledPriceItem>
                        <StyledPriceLabel>ДРОП</StyledPriceLabel>
                        <StyledPriceValue discount={hasDiscount}>{dropPrice}</StyledPriceValue>
                        {hasDiscount && (
                            <StyledBeforePriceValue>{item.price_d}</StyledBeforePriceValue>
                        )}
                    </StyledPriceItem>
                    <StyledPriceItem>
                        <StyledPriceLabel>РОЗДРІБ</StyledPriceLabel>
                        <StyledPriceValue>{retailPrice}</StyledPriceValue>
                    </StyledPriceItem>
                </StyledPrices>
            )}
        </StyledWrap>
    )
}

export default memo(ProductCard);