/* eslint-disable react-refresh/only-export-components */

import React, {createContext, useContext, useState} from "react";

import type {FiltersToRenderType} from "@/types/filters";

interface IRemainsFiltersContext {
    filters: Record<keyof FiltersToRenderType, string[]>
    toggleFilter: (filter: keyof FiltersToRenderType, item: string) => void
    setInitialFilters: (filter: keyof FiltersToRenderType, value: string[]) => void
    clearFilters: () => void
}

interface IRemainsFiltersProviderProps {
    children: React.ReactNode;
}

const RemainsFiltersContext = createContext<IRemainsFiltersContext | undefined>(undefined)

const initialFilters = {
    articles: [],
    brands: [],
    categories: [],
    colors: [],
    designs: [],
    sizes: []
}

export const RemainsFiltersProvider: React.FC<IRemainsFiltersProviderProps> = ({children}) => {
    const [filters, setFilters] = useState<IRemainsFiltersContext['filters']>(initialFilters)

    const toggleFilter = (filter: keyof FiltersToRenderType, item: string) => {
        setFilters(prevState => {
            if (prevState[filter] && prevState[filter].includes(item)) {
                return {
                    ...prevState,
                    [filter]: prevState[filter].filter(i => i !== item)
                }
            } else {
                return {
                    ...prevState,
                    [filter]: [...prevState[filter], item]
                }
            }
        })
    }

    const setInitialFilters = (filter: keyof FiltersToRenderType, value: string[]) =>
        setFilters(prevState => ({
            ...prevState,
            [filter]: value,
        }));


    const clearFilters = () => {
        setFilters(initialFilters)
    }

    return (
        <RemainsFiltersContext.Provider value={{filters, toggleFilter, clearFilters, setInitialFilters}}>
            {children}
        </RemainsFiltersContext.Provider>
    )
}

export const useRemainsFilters = () => {
    const context = useContext(RemainsFiltersContext)
    if (!context) {
        throw new Error('usePageFilters must be used within an product page')
    }
    return context
}