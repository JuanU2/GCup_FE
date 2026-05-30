import apiClient, { getCookie } from "./client"

export const printAll = async (year: string): Promise<undefined> => {
    return (await apiClient.post(`/print`, {year, session: getCookie("session")})).data
}

export const printOne = async (year: string, number: string): Promise<undefined> => {
    return (await apiClient.post(`/print/${number}`, {year, session: getCookie("session")})).data
}

export const generateAllPDF = async (year: string): Promise<Blob> => {
    const response = await apiClient.post(`/print/pdf`, {year, session: getCookie("session")}, { responseType: 'blob' })
    return response.data
}

export const generateOnePDF = async (year: string, number: string): Promise<Blob> => {
    const response = await apiClient.post(`/print/pdf/${number}`, {year, session: getCookie("session")}, { responseType: 'blob' })
    return response.data
}

export const generateAllDiplomasPDF = async (year: string): Promise<Blob> => {
    const response = await apiClient.post(`/print/diplomas/pdf`, {year, session: getCookie("session")}, { responseType: 'blob' })
    return response.data
}

export const generateOneDiplomaPDF = async (year: string, number: string): Promise<Blob> => {
    const response = await apiClient.post(`/print/diplomas/pdf/${number}`, {year, session: getCookie("session")}, { responseType: 'blob' })
    return response.data
}