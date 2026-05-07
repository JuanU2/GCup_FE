import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../@/components/ui/button";
import Spinner from "../components/Spinner";
import { CalendarIcon } from "lucide-react";
import "./RaceDetail.css";
import StickyHeadTable from "../components/TableSticky"
import { useGetRace } from "../hooks/race";
import { useState } from "react";
import EditForm from "../components/EditForm";
import Prepositions2025 from "../components/Prepositions2025";

export default function RaceDetail() {
  const { year } = useParams();
  const [editing, setEditing] = useState(undefined);
  const { data: raceData, isLoading } = useGetRace(year as string);
  return (
    <>
      <NavBar />
      <div className="race-detail">
        <h1 className="race-detail__title">Detail preteku {year}</h1>

        <div className="race-detail__card">
          <div className="race-detail__date">
            <CalendarIcon className="race-detail__calendar-icon" />
            {isLoading ? (
              <Spinner />
            ) : (
              new Intl.DateTimeFormat("sk-Sk", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(raceData.raceDate))
            )}
          </div>

          <Link to={"/tlac/listina/" + year}>
            <Button className="race-detail__list-btn">
              Štartovacia/Výsledková listina
            </Button>
          </Link>

          {(year === "2025") && <Prepositions2025 />}

          <h2 className="race-detail__cyclists-heading">
            Prihlásení cyklisti:
          </h2>
        </div>

        <div className="race-detail__tables">
          {isLoading || raceData.categories.map((category: any) => (
            <div key={category.code} className="race-detail__table-wrapper">
              <StickyHeadTable category={category} setEditing={setEditing} />
            </div>
          ))}
        </div>

        {editing && (
          <EditForm editing={editing} setEditing={setEditing} />
        )}
      </div>
      <Footer />
    </>
  );
}
