import Icon from "../assets/images/icon.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/auth";
import { logout } from "../api/adminApi";
import { clearCookie } from "../api/client";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <img src={Icon} className="navbar__icon" alt="Logo" />
          <span className="navbar__title">Gessayov Cup</span>
        </Link>
        <button
          type="button"
          className="navbar__toggle"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`navbar__menu${isOpen ? " navbar__menu--open" : ""}`}
          id="navbar-menu"
        >
          <ul className="navbar__links">
            <li>
              <Link to="/" className="navbar__link" onClick={() => setIsOpen(false)}>
                Domov
              </Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/GesajovCup/"
                className="navbar__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aktuality
              </a>
            </li>
            <li>
              <Link to="/registracia" className="navbar__link" onClick={() => setIsOpen(false)}>
                Registrácia
              </Link>
            </li>
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/novy-pretek" className="navbar__link" onClick={() => setIsOpen(false)}>
                    Nový Pretek
                  </Link>
                </li>
                <li>
                  <Link to="/tlac" className="navbar__link" onClick={() => setIsOpen(false)}>
                    Tlač
                  </Link>
                </li>
                <li>
                  <button
                    className="navbar__link navbar__logout"
                    onClick={() => {
                      logout().then(() => {
                        setIsAuthenticated(false);
                        clearCookie("session");
                      });
                    }}
                  >
                    Odhlásiť sa
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
