import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { create, deleteSingle, getSingle, getMany } from "../api/raceApi"


export const useRaceCreate = () => {
    const queryClient = useQueryClient()
    return useMutation( {mutationFn: create, onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["races"]})  
    }} )
}


export const useGetAllRaces = () => {
    return useQuery({queryKey: ["races"], queryFn: async () => await getMany() })
}

export const useGetRace = (year: string) => {
    return useQuery({queryKey: ["race"], queryFn: async () => await getSingle(year) })
}

export const useRaceDelete = () => {
    const queryClient = useQueryClient()
    return useMutation( {mutationFn: (year: string) => deleteSingle(year), onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["races"]})  
    }} )
}