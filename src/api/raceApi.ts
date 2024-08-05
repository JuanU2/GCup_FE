import apiClient from "./client"

export const create = async (item: any) : Promise<boolean> => {
    return (await apiClient.post(`/races`, item)).status === 201
}

export const getMany = async () => {
    return (await apiClient.get(`/races`)).data
}

export const getSingle = async (year: string) => {
    return (await apiClient.get(`/races/${year}`)).data
}
