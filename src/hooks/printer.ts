import { useMutation, useQueryClient } from "@tanstack/react-query";
import { printAll, printOne } from "../api/printApi"


export const usePrintAll = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({mutationFn: () => printAll(year), onSuccess: () => queryClient.invalidateQueries({ queryKey: ["race"]})});
}

export const usePrintOne = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({mutationFn: (number: string) => printOne(year, number), onSuccess: () => queryClient.invalidateQueries({ queryKey: ["race"]})});
}