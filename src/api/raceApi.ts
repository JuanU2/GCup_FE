import apiClient, { getCookie } from "./client"

export const create = async (item: any) : Promise<boolean> => {
    return (await apiClient.post(`/races`, 
    {
        ...item,
        session: getCookie("session")
    })).status === 201
}

export const getMany = async () => {
    return (await apiClient.get(`/races`)).data
}

export const getSingle = async (year: string) => {
    return (await apiClient.get(`/races/${year}`)).data
}

export const deleteSingle = async (year: string) => {
    return (await apiClient.delete(`/races/${year}`, {params: {session: getCookie("session")}})).data
}
