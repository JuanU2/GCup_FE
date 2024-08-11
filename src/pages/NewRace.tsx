import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { DatePickerForm } from "../components/DatePicker"
import "./NewRace.css"
export default function NewRace() {
  return (
    <>
    <NavBar/>
    <div className="race-new">
        <h1 className="font-bold font-lg text-center p-6 text-2xl">
            Nový pretek
        </h1>
        <h2 className="font-bold p-6">
            V jednom roku môže byť vytvorený maximálne jeden pretek.
        </h2>
        <DatePickerForm/>
    </div>
    <Footer/>
    </>
  )
}
