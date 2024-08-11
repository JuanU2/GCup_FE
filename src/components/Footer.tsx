import { Link } from "react-router-dom"
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer-container">
        <div className="footer__links grid grid-cols-1 md:grid-cols-2">
            <span className="footer__link">
                <Link to="/registracia" className="footer__link">Registrácia</Link>
            </span>
            <span className="footer__link">
                <Link to="/" className="footer__link">Domov</Link>
            </span>
            <span  className="footer__link">
                <Link to="/admin" className="footer__link">Administrácia</Link>
            </span>
        </div>
        <div className="footer__line">
        &copy; 2024 Juan Marcos.
        </div>
    </footer>
  )
}
