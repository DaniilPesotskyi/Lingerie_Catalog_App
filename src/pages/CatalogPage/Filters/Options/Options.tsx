import {type FC, useEffect, useState} from "react";

import type {FiltersToRenderType, IArticleItem, IDesignItem, IFilterItem} from "@/types/filters";

import FILTERS_LABEL from "@/constants/filtersLabel.ts";

import {useTelegram} from "@/hooks";

import {FilterIcon} from "@/icons";

import {IconButton} from "@/components";

import {StyledOptionsHeading, StyledOptionsList, StyledOptionTitle} from "./styles.ts";
import {useSearchParams} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getFilters} from "@/api/filters.ts";

interface IOptionsProps {
    filter: keyof FiltersToRenderType
    options: IArticleItem[] | IFilterItem[] | IDesignItem[]

    onClose: () => void
}

const Options: FC<IOptionsProps> = ({filter, onClose, options}) => {
    const {
        addBackButtonHandler,
        addMainButtonHandler,
        showMainButton,
        hideMainButto,
        enableMainButton,
        disableMainButtonn
    } = useTelegram()
    const [searchParams, setSearchParams] = useSearchParams()
    const queryClient = useQueryClient()

    const currentValues = searchParams.getAll(filter);
    const [selectedFilters, setSelectedFilters] = useState<string[]>(currentValues)

    const initialFilters = queryClient.getQueryData<FiltersToRenderType>(['filters'])

    const querySearchParams = new URLSearchParams(searchParams.toString())
    querySearchParams.delete(filter)

    const {data: filters} = useQuery({
        queryKey: ['filters', querySearchParams.toString()],
        queryFn: async () => await getFilters(querySearchParams.toString())
    })

    useEffect(() => {
        const unsubscribeBackButton = addBackButtonHandler(onClose)
        const unsubscrineMainButton = addMainButtonHandler()
        return () => {
            unsubscribeBackButton()
        };
    }, [])

    const optionsToRender = () => {
        const options = initialFilters?.[filter] || []

        if (filter === 'articles') {
            return options.map(o => (o as IArticleItem).article)
        }

        if (filter === 'designs') {
            const elements = options.flatMap(el => [...(el as IDesignItem).designs, ...(el as IDesignItem).materials])
            return Array.from(new Set(elements))
        }

        return options.map(o => (o as IFilterItem).value)
    }

    return (
        <>
            <StyledOptionsHeading>
                <StyledOptionTitle>{FILTERS_LABEL[filter]}</StyledOptionTitle>
                <IconButton onClick={onClose}>
                    <FilterIcon/>
                </IconButton>
            </StyledOptionsHeading>

            <StyledOptionsList>
                {optionsToRender().map(i => (
                    <li key={i}>{i}</li>
                ))}
            </StyledOptionsList>

        </>
    )
}

export default Options;