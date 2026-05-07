import { Link } from "react-router-dom"
import Icon from "../assets/images/icon.svg"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={Icon} className="footer__icon" alt="Logo" />
          <span className="footer__title">Gessayov Cup</span>
        </div>
        <div className="footer__links">
          <Link to="/" className="footer__link">Domov</Link>
          <Link to="/registracia" className="footer__link">Registrácia</Link>
          <Link to="/admin" className="footer__link">Administrácia</Link>
        </div>
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} Juan Marcos. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  )
}
