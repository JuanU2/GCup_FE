import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAuth from '../hooks/auth';
import EditIcon from "../assets/images/edit.svg"

interface Column {
  id: 'starting_number' | 'name' | 'surname' | 'age' | 'time';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'starting_number', label: 'Štartovacie č.', format: (value: number) => value.toString() },
  { id: 'name', label: 'Meno',},
  {
    id: 'surname',
    label: 'Priezvisko',
  },
  {
    id: 'age',
    label: 'Vek',
    format: (value: number) => value.toString()
  },
  {
    id: 'time',
    label: 'Čas (hh:mm:ss:MM)',
    align: 'right',
  },
];

interface Data {
  starting_number: number;
  name: string;
  surname: string;
  age: number;
  time: string;
  id: string;
}

function createData(
  starting_number: number,
  name: string,
  surname: string,
  age: number,
  time: string,
  id: string
): Data {
  return { starting_number, name, surname, age, time, id };
}

type Cyclist = {
    name: string,
    surname: string,
    age: number,
    start_number: number,
    time_seconds: number | null,
    id: string
}

type Category = {
    name: string,
    gender: string,
    minAge: number,
    maxAge: number,
    cyclists: Cyclist[]
}

export function formatTime(millisecondseee: number): string {
    let seconds = millisecondseee / 100;
    const pad = (num: number, size: number) => num.toString().padStart(size, '0');

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    const secs = Math.floor(seconds);
    const milliseconds = millisecondseee % 100;

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(secs, 2)}:${pad(milliseconds, 2)}`;
}

export default function StickyHeadTable(props: {category: Category, setEditing: any}) {
    const { isAuthenticated } = useAuth()
  const rows = props.category.cyclists.map((cyclist: Cyclist) =>
    createData(cyclist.start_number, cyclist.name, cyclist.surname, cyclist.age, (cyclist.time_seconds) ? formatTime(cyclist.time_seconds) : "---", cyclist.id)
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440, width: '100%' }}>
        <Table sx={{width: '100%'}} aria-label="table">
          <TableHead sx={{width: '100%', backgroundColor: 'rgb(60, 60, 60)'}}>
            <TableRow className='text-center font-bold w-full text-xl'>
                <TableCell sx={{color: 'white'}}>
                    <strong>{props.category.name}</strong>
                </TableCell>
                <TableCell sx={{width: '100%', color: 'white'}} colSpan={4}>
                    <strong>{props.category.gender == 'M' ? "Muži" : "Ženy"}</strong> od {props.category.minAge} rokov do {props.category.maxAge} rokov.
                </TableCell>
            </TableRow>
            <TableRow sx={{width: '100%'}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth ,color: 'white'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.starting_number}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                            {(isAuthenticated && (column.id === "time")) ? 
                            <button className='w-8 rounded bg-blue-200 hover:bg-blue-300 m-3'>
                                <img src={EditIcon} className='p-1' alt="Edit" onClick={() => props.setEditing(row)} />
                            </button> : <></>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}