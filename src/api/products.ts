export const getProducts = async (params: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/guest/products?${params}`)

    if(!response.ok) {
        throw new Error()
    }

    return response.json()
}

export const getProductById = async (id: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/guest/products/${id}`)

    if(!response.ok) {
        throw new Error()
    }

    return response.json()
}

export const getProductContent = async (id: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/photos/${id}`)

    if(!response.ok) {
        throw new Error()
    }

    return response.json()
}