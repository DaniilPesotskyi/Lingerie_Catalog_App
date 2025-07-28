export const getProducts = async (params: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/guest/products?${params}`)
    return response.json()
}

export const getProductById = async (id: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/guest/products/${id}`)
    return response.json()
}