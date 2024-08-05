import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Admin.css";
import {LoginForm} from "../components/LoginForm";

export default function Admin() {
  return (
    <>
    <NavBar/>
    <div className="admin-page">
        <div className="admin-form__container">
        <div className="admin-form">
            <LoginForm/>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
