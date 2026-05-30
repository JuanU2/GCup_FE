import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StartCislo from "../assets/images/s_cislo.png"
import VyslList from "../assets/images/v_listina.png"
import "./Print.css"
import { Link } from "react-router-dom";
import { ScrollText } from "lucide-react";

export default function Print() {
  return (
    <>
    <NavBar/>
    <div className="print-page">
        <h1 className="print-page__title text-center p-12">Tlač dokumentov</h1>
        <div className="print-page__grid">
            <Link to="/tlac/cislo" className="print-card">
                <img src={StartCislo} alt="Štartovacie číslo obrázok" />
                <span>Tlač štartovacieho čísla</span>
            </Link>
            <Link to="/tlac/listina" className="print-card">
                <img src={VyslList} alt="Štartovacia/výsledková listina obrázok" />
                <span>Tlač štartovacej/výsledkovej listiny</span>
            </Link>
            <Link to="/tlac/diplom" className="print-card">
                <ScrollText className="h-32 w-32 text-amber-600" />
                <span>Tlač diplomov</span>
            </Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}
