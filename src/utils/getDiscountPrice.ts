const getDiscountPrice = (price: number, discount: number) => {
    return Math.ceil(price - (price * discount / 100));
}

export default getDiscountPrice;