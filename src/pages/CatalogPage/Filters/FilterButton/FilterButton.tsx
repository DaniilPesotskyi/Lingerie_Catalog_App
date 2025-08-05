import type {ComponentType, FC} from "react";
import {useSearchParams} from "react-router-dom";

import type {FiltersToRenderType} from "@/types/filters";

import FILTERS_LABEL from "@/constants/filtersLabel.ts";

import {ArticleIcon, BrandIcon, CategoryIcon, ColorIcon, DesignIcon, SizeIcon} from "@/icons";

import {Button} from "@/components";

import {filterButtonStyles, FiltersQnt} from "./styles.ts";

interface IFilterButtonProps {
    filter: keyof FiltersToRenderType;
    onClick: () => void
}

const FILTER_ICONS: Record<keyof FiltersToRenderType, ComponentType> = {
    brands: BrandIcon,
    articles: ArticleIcon,
    designs: DesignIcon,
    colors: ColorIcon,
    categories: CategoryIcon,
    sizes: SizeIcon,
} as const;

const FilterButton: FC<IFilterButtonProps> = ({filter, onClick}) => {
    const [searchParams] = useSearchParams()

    const options = searchParams.getAll(filter)

    const IconComponent = FILTER_ICONS[filter];

    const handleClick = () => {
        onClick();
    };

    return (
        <Button
            variant="transparent"
            onClick={handleClick}
            customStyles={filterButtonStyles}
        >
            <IconComponent/>
            {FILTERS_LABEL[filter]}

            {options.length > 0 ? <FiltersQnt>{options.length}</FiltersQnt> : ''}
        </Button>
    );
};

export default FilterButton