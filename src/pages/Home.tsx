import NavBar from "../components/NavBar";
import routes from "../routes";

export default function Home() {
  return (
    <div>
        <NavBar options={routes}/>
    </div>
  )
}
