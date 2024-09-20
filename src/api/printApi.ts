import apiClient, { getCookie } from "./client"

export const printAll = async (year: string): Promise<undefined> => {
    return (await apiClient.post(`/print`, {year, session: getCookie("session")})).data
}

export const printOne = async (year: string, number: string): Promise<undefined> => {
    return (await apiClient.post(`/print/${number}`, {year, session: getCookie("session")})).data
}