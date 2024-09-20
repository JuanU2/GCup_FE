import apiClient from "./client"


export const login = async (item: any) : Promise<boolean> => {
    return (await apiClient.post(`/admin/login`, item)).data
}

export const logout = async () : Promise<any> => {
    return (await apiClient.post(`/admin/logout`)).data
}