import apiClient from "./client"

export const check = async () : Promise<any> => {
    return (await apiClient.get(`/admin/login`)).data
}