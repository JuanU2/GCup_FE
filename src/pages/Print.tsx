import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StartCislo from "../assets/images/s_cislo.png"
import VyslList from "../assets/images/v_listina.png"
import "./Print.css"
import { Link } from "react-router-dom";

export default function Print() {
  return (
    <>
    <NavBar/>
    <div className="print-page">
        <h1 className="p-12 text-center text-2xl font-bold">Tlač dokumentov</h1>
        <div className="flex lg:flex-row flex-col gap-24 w-full lg:justify-center justify-evenly p-12">
            <Link to="/tlac/cislo" className="print-card text-center flex flex-col justify-between items-center gap-6 p-12 bg-gray-200 rounded-xl">
                <img src={StartCislo} alt="Štartovacie číslo obrázok" className="w-48" />
                <span className="text-xl">
                    Tlač štartovacieho čísla
                </span>
            </Link>
            <Link to="/tlac/listina" className="print-card text-center flex flex-col justify-between items-center gap-6 p-12 bg-gray-200 rounded-xl">
                <img src={VyslList} alt="Štartovacia/výsledková listina obrázok" className="w-48" />
                <span className="text-xl">
                    Tlač štartovacej/výsledkovej listiny
                </span>
            </Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}
