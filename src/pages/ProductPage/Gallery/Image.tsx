import type {FC} from "react";

import {StyledImageWrap} from "./styles.ts";

interface IImageProps {
    src: string;
    color: string
    alt: string;
}

const Image: FC<IImageProps> = ({src, alt, color}) => {
    return (
        <StyledImageWrap to={`/gallery?color=${color}`}>
            <img src={src} alt={alt}/>
        </StyledImageWrap>
    )
}

export default Image;