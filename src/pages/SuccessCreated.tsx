import { Footer } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./SuccessCreated.css";

export default function SuccessCreated() {
const { year, number } = useParams();
  return (
    <>
          <NavBar />
          <div className="success bg-green-200">
            <h1 className="w-full text-center font-bold text-2xl p-12">
                Vaša registrácia pre pretek Gessayov Cup {year} bola úspešná.
                <br />
                Ďakujeme za Vašu registráciu.
            </h1>
            <h2 className="w-full text-center text-2xl">
                Vaše štartovacie číslo je: <br />
                <strong className="text-8xl font-bold p-6">{number}</strong>
            </h2>
            <div className="flex gap-4 w-full justify-center p-6">
                <Link to={"/pretek/" + year}>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Prehľad pretekárov
                    </button>
                </Link>
            </div>
          </div>
          <Footer/>
    </>
  )
}
