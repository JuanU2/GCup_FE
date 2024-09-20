import apiClient, { getCookie } from "./client"

export const check = async () : Promise<any> => {
    return (await apiClient.get(`/admin/login`, {params: {session: getCookie("session")}})).data
}