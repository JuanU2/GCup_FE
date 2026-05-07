import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./SuccessCreated.css";

export default function SuccessCreated() {
const { year, number } = useParams();
  return (
    <>
          <NavBar />
          <div className="success">
            <div className="success__card">
              <div className="success__check">&#10003;</div>
              <h1>
                Vaša registrácia pre pretek Gessayov Cup {year} bola úspešná.
              </h1>
              <p>Ďakujeme za Vašu registráciu.</p>
              <h2>Vaše štartovacie číslo je:</h2>
              <strong className="success__number">{number}</strong>
              <Link to={"/pretek/" + year} className="success__link">
                Prehľad pretekárov
              </Link>
            </div>
          </div>
          <Footer/>
    </>
  )
}
