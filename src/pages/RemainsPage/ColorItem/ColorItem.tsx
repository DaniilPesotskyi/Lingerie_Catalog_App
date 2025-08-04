import {type FC, useState} from "react";

import type {IProductVariation} from "@/types/product";

import {Button, Collapse} from "@/components";

import {
    ColorBox,
    StyledAvailable, StyledOpenIndicator,
    StyledSizeItem,
    StyledSizesList,
    StyledUnavailable,
    toggleButtonStyles
} from "./styles.ts";
import {getColorBackground} from "@/utils";

interface IColorItemProps {
    color: string
    items: IProductVariation[]

    isDefaultOpen: boolean
}

const ColorItem: FC<IColorItemProps> = ({color, items, isDefaultOpen}) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    const toggleOpen = () => setIsOpen(prevState => !prevState);

    const colorBackground = getColorBackground(color)

    return (
        <>
            <Button
                customStyles={toggleButtonStyles}
                variant={'transparent'}
                onClick={toggleOpen}>
                <ColorBox style={{background: colorBackground}}/>
                {color}
                <StyledOpenIndicator>{isOpen ? '-' : '+'}</StyledOpenIndicator>
            </Button>
            <Collapse open={isOpen}>
                <StyledSizesList>
                    {items.map(item => (
                        <StyledSizeItem>
                            <span>{item.size}</span>
                            {item.available
                                ? <StyledAvailable>В наявнсті</StyledAvailable>
                                : <StyledUnavailable>Відсутній</StyledUnavailable>
                            }
                        </StyledSizeItem>
                    ))}
                </StyledSizesList>
            </Collapse>
        </>
    )
}

export default ColorItem