// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';

import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";

import type {IProductContent} from "@/types/product";

import { productsService } from "@/services";

import {NoPhotographyIcon} from "@/icons";

import {SpinnerLoader} from "@/components";

import Image from "./Image.tsx";

import {loaderCustomStyles, StyledGallery} from "./styles.ts";


const Gallery = () => {
    const {id} = useParams()

    const {data: content, isLoading} = useQuery<IProductContent>({
        queryKey: ['content', id],
        queryFn: async () => await productsService.getProductContent(id as string)
    })

    if (isLoading) {
        return (
            <StyledGallery>
                <SpinnerLoader show={true} customStyles={loaderCustomStyles}/>
            </StyledGallery>
        )
    }

    if (!content) {
        return (
            <StyledGallery>
                <NoPhotographyIcon/>
            </StyledGallery>
        )
    }

    const colors = Object.keys(content.photo)

    const slides = colors.length === 1
        ? content.photo[colors[0]].map(photo => ({color: colors[0], photo}))
        : colors.map(color => ({color, photo: content.photo[color][0]}));


    return (
        <StyledGallery>
            <Swiper
                slidesPerView={'auto'}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                spaceBetween={20}
                centeredSlides={true}
                modules={[EffectCoverflow]}
            >
                {slides.map(({color, photo}, i) => (
                    <SwiperSlide style={{maxWidth: '200px'}} key={i}>
                        <Image src={photo} alt={`Фото: ${color}`} color={color}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledGallery>
    )
}

export default Gallery