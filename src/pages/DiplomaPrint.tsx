import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Card } from "@mui/material";
import { Button } from "../@/components/ui/button";
import { FileText, UserRoundSearch } from "lucide-react";
import { useGenerateAllDiplomasPDF, useGenerateOneDiplomaPDF } from "../hooks/printer";
import { useState } from "react";
import { useGetRace } from "../hooks/race";
import { DataGrid } from '@mui/x-data-grid';

function ListToPrintDiploma(props: { year?: string }) {
  const { mutateAsync: generatePDF } = useGenerateOneDiplomaPDF(props.year ?? "");
  const {isLoading, data: race} = useGetRace(props.year ?? "");
  const columns = [
    {field: 'start_number', headerName: 'Štartovacie č.'},
    {field: 'name', headerName: 'Meno'},
    {field:'surname', headerName: 'Priezvisko'},
    {field: 'age', headerName: 'Vek'},
    {field: 'gender', headerName: 'Pohlavie'},
    {field: 'time', headerName: 'Čas', renderCell: (params: any) => (
      params.row.time_seconds ? (params.row.time_seconds / 1000).toFixed(3) + ' s' : '-'
    )},
    {field: 'printButton', headerName: '', renderCell: (params: any) => (
      <div className="flex gap-2">
        <Button onClick={async () => await generatePDF(params.row.start_number)}>Diplom PDF</Button>
      </div>
    ), sortable: false, minWidth: 150}
  ]

  return (
    <div>
      {isLoading ? <div className="text-center p-12">Načítavam...</div> : <DataGrid
        rows={race.categories.flatMap((category: any) => category.cyclists)}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />}
    </div>
  );
}

export default function DiplomaPrint() {
    const {year} = useParams();
    const [selecting, setSelecting] = useState(false);
    const {mutateAsync: generateAllPDF, isPending: generatingAll} = useGenerateAllDiplomasPDF(year ?? "");

  return (
    <>
    <NavBar/>
    <div className="print-page">
        <h1 className="font-bold text-2xl text-center p-6">
            Tlač diplomov pre Gessayov Cup {year}.
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 p-12 w-full justify-evenly align-center">
            <Card className="flex flex-col gap-6 p-6 text-center">
                <h1>
                    Vygenerovať PDF so všetkými diplomami (najlepší 3 v každej kategórii).
                </h1>
                <FileText className="h-24 w-full" />
                <Button onClick={async () => await generateAllPDF()} disabled={generatingAll}>
                    {generatingAll ? "Generujem..." : "Generovať PDF"}
                </Button>
            </Card>
            <Card className="flex flex-col gap-6 p-6 text-center">
                <h1>
                    Vygenerovať diplom pre konkrétneho cyklistu.
                </h1>
                <UserRoundSearch className="h-24 w-full" />
                <Button onClick={() => setSelecting(true)}>
                    Vybrať cyklistu
                </Button>
            </Card>
        </div>
        {selecting &&
        <div className="edit-form__container">
            <h1 className="text-2xl">
                Výber cyklistu
            </h1>
            <ListToPrintDiploma year={year}/>
            <Button onClick={() => setSelecting(false)}>
                Zavrieť
            </Button>
        </div>}
    </div>
    <Footer/>
    </>
  )
}
