import { type FC, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import type { IProductVariation } from "@/types/product";

import { useRemainsFilters } from "@/context/RemainsFilterContext.tsx";

import { Button, Collapse } from "@/components";

import {
    applyGlobalFiltersButtonStyles,
    clearButtonCustomStyles,
    StyledColorFilter,
    StyledFiltersList,
    StyledFilterTitle,
    StyledSizeFilter,
    toggleButtonCustomStyles
} from "./styles.ts";

import { getColorBackground } from "@/utils";

interface IRemainsFiltersProps {
    variations: IProductVariation[]
}

const FILTER_MAPPINGS = {
    size: 'sizes',
    color: 'colors'
} as const;

type VariationKey = keyof typeof FILTER_MAPPINGS;
type FilterKey = typeof FILTER_MAPPINGS[VariationKey];

const RemainsFilter: FC<IRemainsFiltersProps> = ({ variations }) => {
    const [searchParams] = useSearchParams()
    const { filters, toggleFilter, clearFilters, setInitialFilters } = useRemainsFilters();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

    const extractUniqueValues = useCallback(
        (variationsList: IProductVariation[], key: VariationKey): string[] => {
            return Array.from(new Set(
                variationsList
                    .filter(variation => variation.available === true)
                    .map(variation => variation[key])
                    .filter(value => value != null)
                    .map(String)
            ));
        },
        []
    );

    const getFilteredVariationsExcluding = useCallback(
        (excludeFilterType: FilterKey): IProductVariation[] => {
            return variations.filter(variation => {
                if (variation.available !== true) return false;

                return Object.entries(FILTER_MAPPINGS).every(([vKey, fKey]) => {

                    if (fKey === excludeFilterType) return true;

                    const selected = filters[fKey] ?? [];
                    if (selected.length === 0) return true;

                    const value = variation[vKey as VariationKey];
                    return value != null && selected.includes(String(value));
                });
            });
        },
        [variations, filters]
    );

    const filterData = useMemo(() => {
        const allSizes = extractUniqueValues(variations, 'size');
        const allColors = extractUniqueValues(variations, 'color');

        const availableSizeVariations = getFilteredVariationsExcluding('sizes');
        const availableColorVariations = getFilteredVariationsExcluding('colors');

        const availableSizes = extractUniqueValues(availableSizeVariations, 'size');
        const availableColors = extractUniqueValues(availableColorVariations, 'color');

        return {
            allSizes,
            allColors,
            availableSizes,
            availableColors
        };
    }, [variations, filters, extractUniqueValues, getFilteredVariationsExcluding]);

    const handleSizeToggle = (size: string) => toggleFilter('sizes', size)

    const handleColorToggle = (color: string) => toggleFilter('colors', color)

    const hasActiveFilters = useMemo(() => Object.values(filters).some(filterArray => filterArray.length > 0), [filters])
    const { allSizes, allColors, availableSizes, availableColors } = filterData;

    const globalSizes = searchParams.getAll('sizes');
    const globalColorGroups = searchParams.getAll('colors');

    const hasGlobalFiltersToApply = useMemo(() => {
        if (globalSizes.length === 0 && globalColorGroups.length === 0) return false;

        const availableVariations = variations.filter(v => v.available === true);
        const colorGroupToColors = availableVariations.reduce<Record<string, Set<string>>>((acc, v) => {
            const set = acc[v.color_group] ?? new Set<string>();
            set.add(String(v.color));
            acc[v.color_group] = set;
            return acc;
        }, {});

        const currentSizes = filters.sizes;
        const validGlobalSizes = globalSizes.filter(size => allSizes.includes(size));
        const sizesChanged = JSON.stringify([...currentSizes].sort()) !== JSON.stringify([...validGlobalSizes].sort());

        const currentColors = filters.colors;
        const mappedColorsFromGroups = Array.from(new Set(
            globalColorGroups.flatMap(group => Array.from(colorGroupToColors[group] ?? []))
        )).filter(color => allColors.includes(color));

        const colorsChanged = JSON.stringify([...currentColors].sort()) !== JSON.stringify([...mappedColorsFromGroups].sort());

        return sizesChanged || colorsChanged;
    }, [globalSizes, globalColorGroups, filters.sizes, filters.colors, allSizes, allColors, variations]);

    const handleApplyGlobalFilters = () => {
        if (globalSizes.length > 0) {
            const validSizes = globalSizes.filter(size => allSizes.includes(size));
            setInitialFilters('sizes', validSizes);
        }
        if (globalColorGroups.length > 0) {
            const availableVariations = variations.filter(v => v.available === true);
            const colorGroupToColors = availableVariations.reduce<Record<string, Set<string>>>((acc, v) => {
                const set = acc[v.color_group] ?? new Set<string>();
                set.add(String(v.color));
                acc[v.color_group] = set;
                return acc;
            }, {});

            const mappedColors = Array.from(new Set(
                globalColorGroups.flatMap(group => Array.from(colorGroupToColors[group] ?? []))
            )).filter(color => allColors.includes(color));

            setInitialFilters('colors', mappedColors);
        }
    }

    const renderSizes = () => {
        if (allSizes.length === 0) {
            return <div>Розміри відсутні</div>;
        }

        return allSizes.map(size => {
            const isAvailable = availableSizes.includes(size);
            const isActive = filters.sizes.includes(size);

            if (!isAvailable && !isActive) return null;

            return (
                <li key={size}>
                    <StyledSizeFilter
                        onClick={() => handleSizeToggle(size)}
                        active={isActive}
                    >
                        {size}
                    </StyledSizeFilter>
                </li>
            );
        });
    };

    const renderColors = () => {
        if (allColors.length === 0) {
            return <div>Кольори відсутні</div>;
        }

        return allColors.map(color => {
            const isAvailable = availableColors.includes(color);
            const isActive = filters.colors.includes(color);
            const backgroundColor = getColorBackground(color)

            if (!isAvailable && !isActive) return null;

            return (
                <li key={color}>
                    <StyledColorFilter
                        style={{ background: backgroundColor }}
                        onClick={() => handleColorToggle(color)}
                        active={isActive}
                    >
                    </StyledColorFilter>
                </li>
            );
        });
    };

    return (
        <>
            <Collapse open={isOpen} orientation={'vertical'}>
                <StyledFilterTitle>Розмір</StyledFilterTitle>
                <StyledFiltersList>
                    {renderSizes()}
                </StyledFiltersList>

                <StyledFilterTitle>Колір</StyledFilterTitle>
                <StyledFiltersList>
                    {renderColors()}
                </StyledFiltersList>

                {hasActiveFilters && (
                    <Button
                        variant='contained'
                        onClick={clearFilters}
                        customStyles={clearButtonCustomStyles}
                    >
                        Видалити фільтри
                    </Button>
                )}

            </Collapse>

            <Button
                onClick={toggleOpen}
                variant={'outlined'}
                customStyles={toggleButtonCustomStyles}
            >
                {isOpen ? 'Приховати фільтри' : 'Показати фільтри'}
            </Button>

            {hasGlobalFiltersToApply && (
                <Button
                    variant='contained'
                    onClick={handleApplyGlobalFilters}
                    customStyles={applyGlobalFiltersButtonStyles}
                >
                    Застосувати глобальні фільтри
                </Button>
            )}
        </>
    );
};

export default RemainsFilter;