import NavBar from '../components/NavBar'
import "./Registration.css"
import { useParams } from 'react-router-dom';
import { Formular } from '../components/Formular'
import Footer from '../components/Footer'

export default function Registration() {
    const { year } = useParams();
  return (
    <>
        <NavBar/>
        <div className='registration-page'>
            <div className="registration-warning">
                <h1>Pozor!</h1>
                <p>
                    Osoby staršie ako 18 rokov platia za účasť na mieste štartovný poplatok <strong>5 €</strong> pri prevzatí štartovného čísla.
                </p>
            </div>
            <h1 className="registration-page__title">
                Registračný formulár Gessayov Cup {year}
            </h1>
            <div className='registration-form'>
                {year && <Formular year={year}/>}
            </div>
        </div>
        <Footer />
    </>
  )
}
