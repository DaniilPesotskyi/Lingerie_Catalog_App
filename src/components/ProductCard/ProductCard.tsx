import type {FC} from "react";

import type {IProductPreview} from "@/types/product";

import {useUser} from "@/context/UserContext.tsx";

import {
    StyledWrap,
    StyledHeading,
    StyledImage,
    StyledTitle,
    StyledSubtitle,
    StyledColorsList,
    StyledColorItem,
    StyledPrices
} from "./styles.ts";

interface IProductCardProps {
    item: IProductPreview
}

const ProductCard: FC<IProductCardProps> = ({item}) => {
    const {hasAccess} = useUser()

    return (
        <StyledWrap to={`/${item.article}`}>
            <StyledHeading>
                <StyledImage src={item.photo_example || ''} alt="photo example"/>
                <div>
                    <StyledTitle>{item.name}</StyledTitle>
                    <StyledSubtitle>{item.brand} | {item.article}</StyledSubtitle>
                    <StyledColorsList>
                        {item.colors.map((color) => (
                            <StyledColorItem key={color}/>
                        ))}
                    </StyledColorsList>
                </div>
            </StyledHeading>
            {hasAccess && (
                <StyledPrices>

                </StyledPrices>
            )}
        </StyledWrap>
    )
}

export default ProductCard;