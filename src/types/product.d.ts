export interface IProductPreview {
    "uuid": string
    "brand": string,
    "article": string,
    "category": string,
    "design": string | null,
    "materials": string | null,
    // Номенклатура
    "name": string,
    "vendor"?: string,
    // Крупный опт
    "price_w"?: number | null,
    // Опт
    "price"?: number,
    // Дроп
    "price_d"?: number,
    // Розница
    "price_r": number,
    "discount"?: number,
    "available": boolean,
    "photo_example": string | null,
    colors: string[]
}

export interface IProductExtended extends IProductPreview {
    "variations": IProductVariation[]
}

export interface IProductVariation {
    "uuid": string,
    "barcode": number,
    "color_group": string,
    "color": string,
    "size": string,
    "price_w": number,
    "price": number,
    "price_d": number,
    "price_r": number,
    "discount_w": number,
    "discount": number,
    "discount_d": number,
    "discount_r": number,
    available?: boolean,
}

export interface IProductContent {
    "article": string,
    "brand": string,
    photo: {
        // color: urls[]
        [key: string]: string[]
    }
    content: string[]
    video: string[]
}