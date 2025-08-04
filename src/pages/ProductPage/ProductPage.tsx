import {useEffect} from "react";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import toast from "react-hot-toast";

import type {IProductExtended} from "@/types/product";

import {getDiscountPrice} from "@/utils";

import {useTelegram} from "@/hooks";

import {getProductById} from "@/api/products.ts";

import {CopyIcon, WebIcon} from "@/icons";

import {Button, Container, ExpandableText} from "@/components";

import Gallery from "./Gallery/Gallery.tsx";

import {
    designsCustomStyles,
    StyledActions,
    StyledArticle,
    StyledMaterial, StyledPriceItem, StyledPriceLabel,
    StyledPrices, StyledPriceValue,
    StyledSubTitle,
    StyledTitle
} from "./styles.ts";

const ProductPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {
        addBackButtonHandler,
        addMainButtonHandler,
        showMainButton,
        hideBackButton,
        showBackButton,
        hideMainButton
    } = useTelegram()

    const {data: product, isLoading} = useQuery<IProductExtended>({
        queryKey: ['product', id],
        queryFn: async () => await getProductById(id as string),
    })

    useEffect(() => {
        const handleBack = () => {
            navigate(-1)
        }

        const unsubscribeBackButton = addBackButtonHandler(handleBack)
        showBackButton()

        return () => {
            unsubscribeBackButton()
            hideBackButton()
        };
    }, [])

    useEffect(() => {
        if (isLoading) {
            return
        }

        const handleOpenRemains = () => {
            navigate(`/${id}/remains`)
        }

        const unsubscribeMainButton = addMainButtonHandler(handleOpenRemains, 'Переглянути наявність')
        showMainButton()

        return () => {
            unsubscribeMainButton()
            hideMainButton()
        };
    }, [isLoading]);

    if (!product) return <h1>nothing found </h1>

    const name = product.name.replace(/\s*\(.*?\)\s*/g, '')
    const designs = product.design?.split(',').filter((item) => item !== ' ').join(',') || ""

    const wholePrice = product.price && product.discount ? getDiscountPrice(product.price, product.discount) : product.price
    const dropPrice = product.price_d && product.discount ? getDiscountPrice(product.price_d, product.discount) : product.price_d
    const retailPrice = product.price_r

    const handleCopy = () => {
        console.log('copy: ', id)
        toast.success('Скопійованно!')
    }

    return (
        <Container>
            <Gallery/>

            <StyledTitle>{name} {product.brand}</StyledTitle>
            <StyledArticle>{product.article}</StyledArticle>

            <StyledSubTitle>Характеристики</StyledSubTitle>
            <ExpandableText
                component={'p'}
                maxChars={80}
                customStyles={designsCustomStyles}
            >
                {designs}
            </ExpandableText>

            <StyledSubTitle>Матеріал</StyledSubTitle>
            <StyledMaterial>{product.materials}</StyledMaterial>

            <StyledSubTitle>Ціни</StyledSubTitle>
            <StyledPrices>
                <StyledPriceItem>
                    <StyledPriceLabel>ОПТ</StyledPriceLabel>
                    <StyledPriceValue>{wholePrice} грн</StyledPriceValue>
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledPriceLabel>ДРОП</StyledPriceLabel>
                    <StyledPriceValue>{dropPrice} грн</StyledPriceValue>
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledPriceLabel>РОЗДРІБ</StyledPriceLabel>
                    <StyledPriceValue>{retailPrice} грн</StyledPriceValue>
                </StyledPriceItem>
            </StyledPrices>

            <StyledActions>
                <Button variant={'outlined'} onClick={handleCopy}>
                    <CopyIcon/>
                    Копіювати
                </Button>
                <Button variant={'outlined'}>
                    <WebIcon/>
                    Відкрити в B2B
                </Button>
            </StyledActions>

            <Outlet/>
        </Container>
    )
}

export default ProductPage