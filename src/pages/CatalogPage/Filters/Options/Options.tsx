import {type ChangeEvent, type FC, useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import type {FiltersToRenderType, IArticleItem, IDesignItem, IFilterItem, IFilters} from "@/types/filters";

import FILTERS_LABEL from "@/constants/filtersLabel.ts";

import { filtersService } from "@/services";

import {useTelegram} from "@/hooks";

import {Input, SpinnerLoader} from "@/components";

import {
    customSearchbarStyles,
    StyledOptionsButton,
    StyledOptionsHeading,
    StyledOptionsList,
    StyledOptionTitle
} from "./styles.ts";

interface IOptionsProps {
    filter: keyof FiltersToRenderType
    options: IArticleItem[] | IFilterItem[] | IDesignItem[]
    onClose: () => void
}

const Options: FC<IOptionsProps> = ({filter, onClose, options}) => {
    const {
        telegram,
        addBackButtonHandler,
        addMainButtonHandler,
        showMainButton,
        hideMainButton,
    } = useTelegram()
    const [searchParams, setSearchParams] = useSearchParams()

    const currentValues = searchParams.getAll(filter);
    const [selectedFilters, setSelectedFilters] = useState<string[]>(currentValues)

    const querySearchParams = new URLSearchParams(searchParams.toString())
    querySearchParams.delete(filter)

    const [searchQuery, setSearchQuery] = useState('')

    const {data: filters, isLoading} = useQuery<IFilters>({
        queryKey: ['filters', querySearchParams.toString()],
        queryFn: async () => await filtersService.getFilters(querySearchParams.toString())
    })

    useEffect(() => {
        const unsubscribeBackButton = addBackButtonHandler(onClose)
        telegram.setHeaderColor('secondary_bg_color')

        document.body.classList.add('no-scroll')
        return () => {
            unsubscribeBackButton()
            telegram.setHeaderColor('bg_color')
            document.body.classList.remove('no-scroll')
        };
    }, [])

    const acceptFilters = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete(filter);
        selectedFilters.forEach(val => newParams.append(filter, val));
        setSearchParams(newParams);
        onClose();
    };

    const toggleItem = (value: string) => {
        setSelectedFilters(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    useEffect(() => {
        const isChanged = JSON.stringify([...selectedFilters].sort()) !== JSON.stringify([...currentValues].sort());

        const unsubscribeMainButton = addMainButtonHandler(acceptFilters, 'ЗАСТОСУВАТИ')

        if (isChanged) {
            showMainButton()
        } else {
            hideMainButton()
        }

        return () => {
            unsubscribeMainButton()
        }

    }, [selectedFilters, currentValues, addMainButtonHandler, showMainButton, hideMainButton])

    const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const allOptions = useMemo(() => {
        if (filter === 'articles') {
            return options.map(o => (o as IArticleItem).article)
        }

        if (filter === 'designs') {
            const elements = options.flatMap(el => [...(el as IDesignItem).designs, ...(el as IDesignItem).materials])
            return Array.from(new Set(elements))
        }

        return options.map(o => (o as IFilterItem))
    }, [options, filter])

    const availableOptions = useMemo(() => {
        if (!filters) return []

        if (filter === 'articles') {
            return filters[filter].map(item => item.article)
        }

        if (filter === 'designs') {
            const elements = filters[filter].flatMap(el => [...el.designs, ...el.materials])
            return Array.from(new Set(elements))
        }

        return filters[filter].map(item => item)
    }, [filters, filter]);

    const optionsToRender = () => {
        return [...allOptions]
            .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a) =>
                availableOptions.includes(a) ? -1 : 1
            );
    }

    if (isLoading) {
        return <SpinnerLoader show={true}/>
    }

    return (
        <>
            <StyledOptionsHeading>
                <StyledOptionTitle>{FILTERS_LABEL[filter]}</StyledOptionTitle>
            </StyledOptionsHeading>

            <Input
                customStyles={customSearchbarStyles}
                onChange={handleSearchQueryChange}
                value={searchQuery}
                placeholder={'Пошук'}
            />

            <StyledOptionsList>
                {optionsToRender().map(i => (
                    <li key={i}>
                        <StyledOptionsButton
                            onClick={() => toggleItem(i)}
                            active={selectedFilters.includes(i)}
                            disabled={!availableOptions.includes(i)}
                        >
                            {i}
                        </StyledOptionsButton>
                    </li>
                ))}
            </StyledOptionsList>

        </>
    )
}

export default Options;