import {type FC, memo} from "react";

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
    StyledPriceValue, NoImageStub
} from "./styles.ts";

interface IProductCardProps {
    item: IProductPreview
}

const ProductCard: FC<IProductCardProps> = ({item}) => {
    const {hasAccess} = useUser()

    const name = item.name.replace(/\s*\(.*?\)\s*/g, '')

    const wholePrice = item.price && item.discount ? getDiscountPrice(item.price, item.discount) : item.price
    const dropPrice = item.price_d && item.discount ? getDiscountPrice(item.price_d, item.discount) : item.price_d
    const retailPrice = item.price_r

    return (
        <StyledWrap to={`/${item.article}`}>
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
            {hasAccess && (
                <StyledPrices>
                    <StyledPriceItem>
                        <StyledPriceLabel>ОПТ</StyledPriceLabel>
                        <StyledPriceValue>{wholePrice}</StyledPriceValue>
                    </StyledPriceItem>
                    <StyledPriceItem>
                        <StyledPriceLabel>ДРОП</StyledPriceLabel>
                        <StyledPriceValue>{dropPrice}</StyledPriceValue>
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