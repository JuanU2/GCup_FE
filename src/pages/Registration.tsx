import NavBar from '../components/NavBar'
import "./Registration.css"
import { useParams } from 'react-router-dom';
import { Formular } from '../components/Formular'

export default function Registration() {
    const { year } = useParams();
  return (
    <>
        <NavBar/>
        <div className='registration-page'>
            <h1>
                Registračný formulár Gessayov Cup {year}
            </h1>
            <div className='registration-form'>
                {year && <Formular year={year}/>}
            </div>
        </div>
    </>
  )
}
