export const getFilters = async (params?: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/filters?${params}`)
    return response.json()
}