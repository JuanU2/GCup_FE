import { useMutation, useQueryClient } from "@tanstack/react-query";
import { printAll, printOne, generateAllPDF, generateOnePDF, generateAllDiplomasPDF, generateOneDiplomaPDF } from "../api/printApi"

function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export const usePrintAll = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({mutationFn: () => printAll(year), onSuccess: () => queryClient.invalidateQueries({ queryKey: ["race"]})});
}

export const usePrintOne = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({mutationFn: (number: string) => printOne(year, number), onSuccess: () => queryClient.invalidateQueries({ queryKey: ["race"]})});
}

export const useGenerateAllPDF = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => generateAllPDF(year),
        onSuccess: (blob: Blob) => {
            downloadBlob(blob, `startovacie-cisla-${year}.pdf`)
            queryClient.invalidateQueries({ queryKey: ["race"]})
        }
    });
}

export const useGenerateOnePDF = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (number: string) => generateOnePDF(year, number),
        onSuccess: (blob: Blob, number: string) => {
            downloadBlob(blob, `startovacie-cislo-${number}.pdf`)
            queryClient.invalidateQueries({ queryKey: ["race"]})
        }
    });
}

export const useGenerateAllDiplomasPDF = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => generateAllDiplomasPDF(year),
        onSuccess: (blob: Blob) => {
            downloadBlob(blob, `diplomy-${year}.pdf`)
            queryClient.invalidateQueries({ queryKey: ["race"]})
        }
    });
}

export const useGenerateOneDiplomaPDF = (year: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (number: string) => generateOneDiplomaPDF(year, number),
        onSuccess: (blob: Blob, number: string) => {
            downloadBlob(blob, `diplom-${number}.pdf`)
            queryClient.invalidateQueries({ queryKey: ["race"]})
        }
    });
}