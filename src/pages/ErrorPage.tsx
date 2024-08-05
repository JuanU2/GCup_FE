import { Footer } from "flowbite-react";
import NavBar from "../components/NavBar";
import "./ErrorPage.css";
import ErrorIcon from "../assets/images/error.svg";

export default function ErrorPage() {
  return (
    <>
          <NavBar />
          <div className="error bg-red-300">
            <h1 className="w-full text-center font-bold text-2xl p-12">
                Chyba serveru.
            </h1>
            <h2 className="w-full text-center text-2xl">
                Služba je dočasne nedostupná, skúste znovu o chvíľu
            </h2>
            <div className="flex w-full justify-center">
            <img src={ErrorIcon} alt="Error Icon" className="w-48 p-12" />
            </div>
          </div>
          <Footer/>
    </>
  )
}
