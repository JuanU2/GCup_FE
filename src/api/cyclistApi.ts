import apiClient from "./client";

export enum Gender {
    Male = 'M',
    Female = 'F'
}

export type CyclistCreate = {
    id?: string,
    name: string,
    surname: string,
    age: number,
    gender: string,
    email?: string
}

export type CyclistUpdate = {
    id?: string,
    name?: string,
    surname?: string,
    age?: number,
    gender?: Gender,
    email?: string,
    time_seconds?: number
}

export const getMany = async (params: any) => {
    const response = (await apiClient.get(`/cyclists`, { params }))
    return response.data
}

export const getOne = async (id: string) => {
    return (await apiClient.get(`/cyclists/${id}`)).data
}

export const create = async (item: CyclistCreate) : Promise<any> => {
    const response = (await apiClient.post(`/cyclists`, item))
    if (response.status != 201) {
        throw new Error(`Failed to create cyclist: ${response.statusText}`)
    } 
    return response.data;
}

export const update = async(id: string, item: CyclistUpdate) => {
    return (await apiClient.put(`/cyclists/${id}`, item)).data
}

export const remove = async (id: string) => {
    return (await apiClient.delete(`/cyclists/${id}`))
}