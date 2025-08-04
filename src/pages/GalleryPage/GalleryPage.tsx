import {type ChangeEvent, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {useQuery} from "@tanstack/react-query";

import type {IProductContent} from "@/types/product";

import {useTelegram} from "@/hooks";

import {getProductContent} from "@/api/products.ts";

import {StyledContentSelect, StyledGalleryContainer, StylesPhotosList} from "./styles.ts";

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

const GalleryPage = () => {
    const {telegram} = useTelegram()
    const {id} = useParams()

    const [currentContent, setCurrentContent] = useState<string>()

    const {data: content} = useQuery<IProductContent>({
        queryKey: ['content', id],
        queryFn: async () => await getProductContent(id as string)
    })

    useEffect(() => {
        document.body.classList.add('no-scroll')
        telegram.setHeaderColor('#000000')
        return () => {
            document.body.classList.remove('no-scroll')
            telegram.setHeaderColor('bg_color')
        }
    }, [])

    if (!content) return <h1>GALLERY</h1>;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentContent(e.target.value)
    }

    const photosByColor: Record<string, string[]> =
        Object.entries(content.photo).reduce(
            (acc, [color, urls]) => {
                acc[color] = urls
                return acc
            },
            {} as Record<string, string[]>
        )

    const colors = Object.keys(content.photo)

    const options = [
        ...colors,
        'content'
    ]

    const items: Record<string, string[]> = {
        ...photosByColor,
        content: content.content
    }

    const itemsToRender = items[currentContent as string] ? items[currentContent as string] : []

    return (
        <StyledGalleryContainer
            as={motion.div}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{duration: 0.3}}
            variants={variants}
        >
            <StyledContentSelect
                name="content"
                id='content'
                value={currentContent}
                onChange={handleChange}
            >
                {options.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                ))}
            </StyledContentSelect>
            <StylesPhotosList>
                {itemsToRender.map((photo, index) => (
                    <li key={index}>
                        <img src={photo} alt="photo"/>
                    </li>
                ))}
            </StylesPhotosList>
        </StyledGalleryContainer>

    )
}

export default GalleryPage;