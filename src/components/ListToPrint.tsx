import { usePrintOne } from "../hooks/printer";
import { DataGrid } from '@mui/x-data-grid';
import { useGetRace } from "../hooks/race";
import { LoaderPinwheel } from "lucide-react";
import { Button } from "../@/components/ui/button";

export default function ListToPrint(props: { year?: string }) {
  const { mutateAsync: printOne } = usePrintOne(props.year ?? "");
  const {isLoading, data: race} = useGetRace(props.year ?? "");
  const columns = [
    {field: 'start_number', headerName: 'Štartovacie č.'},
    {field: 'name', headerName: 'Meno'},
    {field:'surname', headerName: 'Priezvisko'},
    {field: 'age', headerName: 'Vek'},
    {field: 'gender', headerName: 'Pohlavie'},
    {field: 'isPrinted', headerName: 'Tlač'},
    {field: 'printButton', headerName: '', renderCell: (params: any) => (<Button onClick={async () => await printOne(params.row.start_number)}>Tlačiť</Button>), sortable: false}
  ]

  return (
    <div>
      {isLoading ? <LoaderPinwheel className="w-24"/> : <DataGrid
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
