import type {FC} from "react";
import {useParams} from "react-router-dom";

import {StyledImageWrap} from "./styles.ts";

interface IImageProps {
    src: string;
    color: string
    alt: string;
}

const Image: FC<IImageProps> = ({src, alt, color}) => {
    const {id} = useParams()

    return (
        <StyledImageWrap to={`/${id}/gallery?color=${color}`}>
            <img src={src} alt={alt}/>
        </StyledImageWrap>
    )
}

export default Image;