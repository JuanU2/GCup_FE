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
            <div className="bg-red-300 border-2 border-black rounded text-center p-6">
                <h1>
                    <strong className="font-bold text-xl">Pozor!</strong>
                </h1>
                <section>
                    Osoby staršie ako 18 rokov platia za účasť na mieste štartovný poplatok <strong className="font-bold">5 €</strong> pri prevzatí štartovného čísla.
                </section>
            </div>
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
