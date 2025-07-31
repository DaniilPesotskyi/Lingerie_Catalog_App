import type {IFilters} from "@/types/filters";

const FILTERS_LABEL: Record<keyof IFilters, any> = {
    max_price: '',
    min_price: '',
    articles: 'Артикули',
    brands: 'Бренди',
    categories: 'Категорії',
    colors: 'Кольори',
    sizes: 'Розміри',
    designs: 'Характеристики'
}

export default FILTERS_LABEL