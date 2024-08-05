import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { DatePickerForm } from "../components/DatePicker"
import "./NewRace.css"
export default function NewRace() {
  return (
    <>
    <NavBar/>
    <div className="race-new">
        <DatePickerForm/>
    </div>
    <Footer/>
    </>
  )
}
