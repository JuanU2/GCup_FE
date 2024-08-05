import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { create, getSingle } from "../api/raceApi"


export const useRaceCreate = () => {
    const queryClient = useQueryClient()
    return useMutation( {mutationFn: create, onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["races"]})  
    }} )
}

export const useGetRace = (year: string) => {
    return useQuery({queryKey: ["race"], queryFn: async () => await getSingle(year) })
}