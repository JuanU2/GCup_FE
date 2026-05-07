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
    label: 'Čas (hh:mm:ss:MS)',
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
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
      <TableContainer sx={{ maxHeight: 440, width: '100%' }}>
        <Table sx={{width: '100%'}} aria-label="table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgb(8, 32, 18)' }}>
                <TableCell sx={{color: 'white', fontWeight: 700, fontSize: '1rem'}}>
                    {props.category.name}
                </TableCell>
                <TableCell sx={{color: 'rgba(255,255,255,0.85)', fontWeight: 600}} colSpan={4}>
                    {props.category.gender == 'M' ? "Muži" : "Ženy"} — od {props.category.minAge} rokov {(props.category.maxAge > 100) ? "a viac" : ("do " + props.category.maxAge.toString() + " rokov")}
                </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: 'rgb(12, 45, 26)' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: 'white', fontWeight: 600, fontSize: '0.85rem' }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.starting_number}
                    sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(8, 32, 18, 0.04)' } }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                            {(isAuthenticated && (column.id === "time")) ?
                            <button
                              className='edit-time-btn'
                              onClick={() => props.setEditing(row)}
                              title="Upraviť čas"
                            >
                                <img src={EditIcon} className='p-1' alt="Edit" />
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
