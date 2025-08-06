import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useInView} from "react-intersection-observer";

import type {IProductPreview} from "@/types/product";

import {getProducts} from "@/api/products.ts";

import {SpinnerLoader} from "@/components";

import ProductCard from "../ProductCard/ProductCard.tsx";

import {StyledLastElement, StyledProductsList} from "./styles.ts";

const ProductsList = () => {
    const {ref, inView} = useInView({
        rootMargin: '400px'
    })

    const [searchParams] = useSearchParams()

    const {
        data: products,
        isFetching,
        fetchNextPage,
        hasNextPage
    } = useInfiniteQuery({
        queryKey: ['PRODUCTS', searchParams.toString()],
        queryFn: async ({pageParam}): Promise<IProductPreview[]> => {
            const params = new URLSearchParams(searchParams.toString());
            params.set('offset', pageParam.toString());
            params.set('limit', '20');

            return await getProducts(params.toString())
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 20 ? allPages.length * 20 : undefined;
        },
    })

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView])

    if (!products && isFetching) {
        return <SpinnerLoader show={isFetching}/>
    }

    if (!products) {
        return <h1>Нічого не знайшли :(</h1>
    }

    return (
        <>
            <StyledProductsList>
                {products.pages.map((page, i) => (
                    <React.Fragment key={i}>
                        {page.map((product, i) => (
                            <li key={i}>
                                <ProductCard item={product}/>
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </StyledProductsList>
            {!isFetching && (
                <StyledLastElement ref={ref}>
                    {!hasNextPage && products?.pages && (
                        <>Це весь наш товар</>
                    )}
                </StyledLastElement>
            )}
            <SpinnerLoader show={isFetching}/>
        </>
    )
}

export default ProductsList;