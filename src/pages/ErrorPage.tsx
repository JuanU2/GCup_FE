import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ErrorPage.css";
import ErrorIcon from "../assets/images/error.svg";

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <div className="error">
        <div className="error__card">
          <img src={ErrorIcon} alt="Error" className="error__icon" />
          <h1>Chyba serveru.</h1>
          <p>Služba je dočasne nedostupná, skúste znovu o chvíľu.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}
