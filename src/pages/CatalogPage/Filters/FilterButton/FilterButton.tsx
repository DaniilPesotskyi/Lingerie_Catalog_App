import type {ComponentType, FC} from "react";
import type {FiltersToRenderType} from "@/types/filters";

import FILTERS_LABEL from "@/constants/filtersLabel.ts";

import {ArticleIcon, BrandIcon, CategoryIcon, ColorIcon, DesignIcon, SizeIcon} from "@/icons";

import {Button} from "@/components";

import {filterButtonStyles} from "./styles.ts";

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
        </Button>
    );
};

export default FilterButton