import apiClient from "./client"

export const printAll = async (year: string): Promise<undefined> => {
    return (await apiClient.post(`/print`, {year})).data
}

export const printOne = async (year: string, number: string): Promise<undefined> => {
    return (await apiClient.post(`/print/${number}`, {year})).data
}