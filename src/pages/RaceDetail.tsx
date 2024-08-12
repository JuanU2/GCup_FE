import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import Spinner from "../components/Spinner";
import { CalendarIcon } from "lucide-react";
import "./RaceDetail.css";
import StickyHeadTable from "../components/TableSticky"
import { useGetRace } from "../hooks/race";
import { useState } from "react";
import EditForm from "../components/EditForm";

export default function RaceDetail() {
  const { year } = useParams();
  const [editing, setEditing] = useState(undefined);
  const { data: raceData, isLoading } = useGetRace(year as string);
  return (
    <>
      <NavBar />
      <div className="race-detail">
        <h1 className="text-2xl text-center p-6">Detail preteku {year}.</h1>
        <div className="detail__detail">
          <section className="font-bold text-center flex w-full justify-center gap-6">
             <CalendarIcon/> {isLoading ? (
              <Spinner />
            ) : (
              new Intl.DateTimeFormat("sk-Sk", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(raceData.raceDate))
            )}
          </section>
          <section className="w-full flex justify-center align-center p-6">
            <Link to={"/tlac/listina/" + year}>
                <Button className="bg-blue-400">
                    Štartovacia/Výsledková listina
                </Button>
            </Link>
          </section>
          <h2 className="p-6 text-2xl text-center">
            Prihlásení cyklisti:
          </h2>
          <div className="tables__wrapper">
          {isLoading || raceData.categories.map((category: any) => (<div key={category.code} className="table--container"><StickyHeadTable category={category} setEditing={setEditing} /></div>))}
          <div>
            {editing && (
              <EditForm editing={editing} setEditing={setEditing}/>
            )}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
