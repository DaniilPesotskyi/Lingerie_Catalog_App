export interface IFilters {
    max_price: number,
    min_price: number,

    articles: IArticleItem[]
    brands: IFilterItem[]
    categories: IFilterItem[]
    colors: IFilterItem[]
    sizes: IFilterItem[]
    designs: IDesignItem[]
}

export interface IArticleItem {
    "brand": string,
    "article": string,
    "category": string,
}

export interface IDesignItem {
    "category": string,
    "designs": string[],
    "materials": string[],
}

export type IFilterItem = {value: string, count: number}

export type FiltersToRenderType = Omit<IFilters, 'min_price' | 'max_price'>;