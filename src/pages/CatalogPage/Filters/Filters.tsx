import {useEffect, useMemo, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {AnimatePresence, motion} from "framer-motion";

import {getFilters} from "@/api/filters.ts";

import useTelegram from "@/hooks/useTelegram.ts";

import type {FiltersToRenderType, IFilters} from "@/types/filters";

import {ClearFilterIcon} from "@/icons";

import {IconButton, SpinnerLoader} from "@/components";

import FilterButton from "./FilterButton/FilterButton.tsx";
import Options from "./Options/Options.tsx";

import {StyledFiltersWrap, StyledHeading, StyledPickerWrap, StyledTitle} from "./styles.ts";

const Filters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {addBackButtonHandler, showBackButton, hideBackButton} = useTelegram()

    const {data: filters} = useQuery<IFilters>({
        queryKey: ['filters'],
        queryFn: async () => await getFilters(searchParams.toString())
    })

    const [openedFilter, setOpenedFilter] = useState<keyof FiltersToRenderType | null>(null)

    const handleFiltersClose = () => {
        document.body.classList.remove("menu-open");
        document.body.classList.remove("no-scroll");
    }

    const handleClearAllFilters = () => {
        setSearchParams(new URLSearchParams());
        handleFiltersClose()
    };

    const hasActiveFilters = useMemo(() => {
        return Array.from(searchParams.keys()).length > 0;
    }, [searchParams]);

    useEffect(() => {
        let hasClass = document.body.classList.contains("menu-open");
        let unsubscribeBackButton: (() => void) | null = null;

        const backHandler = () => {
            if (openedFilter) {
                setOpenedFilter(null);
            } else {
                handleFiltersClose();
            }
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    const currentHasClass = document.body.classList.contains(
                        "menu-open"
                    );

                    if (currentHasClass !== hasClass) {
                        if (currentHasClass) {
                            unsubscribeBackButton = addBackButtonHandler(backHandler);
                            showBackButton();
                        } else {
                            if (unsubscribeBackButton) {
                                unsubscribeBackButton();
                                unsubscribeBackButton = null;
                            }
                            hideBackButton();
                        }
                        hasClass = currentHasClass;
                    }
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            observer.disconnect();
            if (unsubscribeBackButton) {
                unsubscribeBackButton();
            }
        };
    }, [openedFilter, addBackButtonHandler, showBackButton, hideBackButton]);

    useEffect(() => {
        let unsubscribeBackButton: (() => void) | undefined;

        if (!openedFilter) {
            unsubscribeBackButton = addBackButtonHandler(handleFiltersClose)
        }

        return () => {
            if (unsubscribeBackButton) {
                unsubscribeBackButton();
            }
        };
    }, [openedFilter]);

    if (!filters) {
        return (
            <StyledFiltersWrap>
                <SpinnerLoader show={true}/>
            </StyledFiltersWrap>
        )
    }

    const filtersToRender = Object.keys(filters).filter(filter => !['min_price', 'max_price'].includes(filter)) as Array<keyof FiltersToRenderType>

    return (
        <StyledFiltersWrap>
            <StyledHeading>
                <StyledTitle>
                    Фільтри
                </StyledTitle>

                <div style={{marginLeft: 'auto'}}/>

                {hasActiveFilters && (
                    <IconButton onClick={handleClearAllFilters}>
                        <ClearFilterIcon />
                    </IconButton>
                )}

            </StyledHeading>
            <ul>
                {filtersToRender.map(filter => (
                    <li key={filter}>
                        <FilterButton filter={filter} onClick={() => setOpenedFilter(filter)}/>
                    </li>
                ))}
            </ul>

            <AnimatePresence mode="wait">
                {openedFilter && (
                    <StyledPickerWrap
                        as={motion.div}
                        key={openedFilter}
                        initial={{x: '100%'}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{
                            duration: 0.2,
                            type: 'tween',
                        }}
                    >
                        <Options
                            filter={openedFilter}
                            options={filters[openedFilter]}
                            onClose={() => setOpenedFilter(null)}
                        />
                    </StyledPickerWrap>
                )}
            </AnimatePresence>

        </StyledFiltersWrap>
    )
}

export default Filters;