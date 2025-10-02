import {useEffect} from "react";
import {Outlet, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import toast from "react-hot-toast";

import type {IProductExtended} from "@/types/product";

import {copyToClipboard, getDiscountPrice} from "@/utils";

import {useTelegram} from "@/hooks";

import { productsService } from "@/services";

import {LinkIcon, WebIcon} from "@/icons";

import {Button, Container, ExpandableText, SpinnerLoader} from "@/components";

import Gallery from "./Gallery/Gallery.tsx";

import {
    designsCustomStyles,
    StyledActions,
    StyledArticle, StyledDesignItem, StyledEmptyText,
    StyledMaterial, StyledPriceBeforeValue, StyledPriceItem, StyledPriceLabel,
    StyledPrices, StyledPriceValue,
    StyledSubTitle,
    StyledTitle
} from "./styles.ts";
import {RemainsFiltersProvider} from "@/context/RemainsFilterContext.tsx";

const ProductPage = () => {
    const {id} = useParams();
    const [searchParams] = useSearchParams()
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
        queryFn: async () => await productsService.getProductById(id as string),
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
            navigate(`/${id}/remains?${searchParams.toString()}`)
        }
        const unsubscribeMainButton = addMainButtonHandler(handleOpenRemains, 'Переглянути наявність')
        showMainButton()

        return () => {
            unsubscribeMainButton()
            hideMainButton()
        };
    }, [isLoading]);

    if (isLoading) {
        return (
            <SpinnerLoader show={true}/>
        )
    }

    if (!product) return <StyledEmptyText>Товару немає в наявності або взагалі не існує</StyledEmptyText>

    const name = product.name.replace(/\s*\(.*?\)\s*/g, '')
    const designs = product.design?.split(',').filter((item) => item !== ' ' && item !== '') || []

    const activeDesigns = searchParams.getAll('designs')

    const wholePrice = product.price && product.discount ? getDiscountPrice(product.price, product.discount) : product.price
    const dropPrice = product.price_d && product.discount ? getDiscountPrice(product.price_d, product.discount) : product.price_d
    const retailPrice = product.price_r

    const hasDiscount = Boolean(product.discount)

    const handleCopy = () => {
        copyToClipboard(`https://t.me/Lingerie_mini_Catalog_Bot/app?startapp=${product.article.replaceAll(' ', '_')}`)
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
                {designs.map((item, index) => (
                    <>
                        <StyledDesignItem active={activeDesigns.includes(item.trim())}>{item}</StyledDesignItem>
                        {index !== designs.length - 1 && ','}
                    </>
                ))}
            </ExpandableText>

            <StyledSubTitle>Матеріал</StyledSubTitle>
            <StyledMaterial>{product.materials}</StyledMaterial>

            <StyledSubTitle>Ціни</StyledSubTitle>
            <StyledPrices>
                <StyledPriceItem>
                    <StyledPriceLabel>ОПТ</StyledPriceLabel>
                    <StyledPriceValue discount={hasDiscount}>{wholePrice} грн</StyledPriceValue>
                    {hasDiscount && (
                        <StyledPriceBeforeValue>{product.price}</StyledPriceBeforeValue>
                    )}
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledPriceLabel>ДРОП</StyledPriceLabel>
                    <StyledPriceValue discount={hasDiscount}>{dropPrice} грн</StyledPriceValue>
                    {hasDiscount && (
                        <StyledPriceBeforeValue>{product.price_d}</StyledPriceBeforeValue>
                    )}
                </StyledPriceItem>
                <StyledPriceItem>
                    <StyledPriceLabel>РОЗДРІБ</StyledPriceLabel>
                    <StyledPriceValue>{retailPrice} грн</StyledPriceValue>
                </StyledPriceItem>
            </StyledPrices>

            <StyledActions>
                <Button variant={'outlined'} onClick={handleCopy}>
                    <LinkIcon/>
                    Посилання
                </Button>
                <Button
                    as={'a'}
                    variant={'outlined'}
                    href={`https://b2b.lingerie.optbelya.com/ua/${product.article}`}
                    target="_blank"
                >
                    <WebIcon/>
                    Відкрити в B2B
                </Button>
            </StyledActions>

           <RemainsFiltersProvider>
               <Outlet/>
           </RemainsFiltersProvider>
        </Container>
    )
}

export default ProductPage