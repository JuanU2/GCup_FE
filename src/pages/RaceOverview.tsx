import { Card } from "../@/components/ui/card";
import { getMany } from "../api/raceApi";
import NavBar from "../components/NavBar";
import "./RaceOverview.css";
import Spinner from "../components/Spinner";
import { CalendarIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { TrashIcon } from "lucide-react";
import useAuth from "../hooks/auth";
import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { useRaceDelete } from "../hooks/race";

function ConvertToDateString(date: Date): string {
  return new Intl.DateTimeFormat("sk-Sk", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function RaceOverview() {
  const [deletingYear, setDeletingYear]: any = useState(undefined);
  const { isAuthenticated } = useAuth();
  const { mutateAsync: deleteRace, isPending } = useRaceDelete();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const { data: raceData, isLoading: racesLoading } = useQuery({
    queryKey: ["races"],
    queryFn: getMany,
  });

  return (
    <>
      <NavBar />
      <div className="race-overview">
        <h1 className="race-overview__title">
          Registrácia na pretek, vyberte pretek:
        </h1>
        <div className="race-overview__grid">
          {racesLoading ? (
            <Spinner />
          ) : (
            raceData.map((race: any) => {
              const raceDate = new Date(race.raceDate);
              const year = new Date(race.raceDate).getFullYear().toString();
              const isPast = raceDate < today;
              return (
                <Card key={year} className="race-card">
                  {isAuthenticated && (
                    <div className="race-card__delete-row">
                      <button
                        onClick={() => setDeletingYear(year)}
                        className="race-card__delete-btn"
                        title="Vymazať pretek"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                  <div className="race-card__year-badge">{year}</div>
                  <div className="race-card__date">
                    <CalendarIcon className="race-card__calendar-icon" />
                    <span>{ConvertToDateString(new Date(race.raceDate))}</span>
                  </div>
                  <div className="race-card__actions">
                    <Link to={"/pretek/" + year}>
                      <Button className="race-card__btn race-card__btn--detail">
                        Detail preteku
                      </Button>
                    </Link>
                    <Link
                      className={isPast ? "pointer-events-none" : ""}
                      to={isPast ? "#" : "/registracia/" + year}
                    >
                      <Button
                        disabled={isPast}
                        className="race-card__btn race-card__btn--register"
                      >
                        Registrovať sa
                      </Button>
                    </Link>
                  </div>

                  {deletingYear === year && (
                    <div className="delete-overlay" onClick={() => setDeletingYear(undefined)}>
                      <div className="delete-dialog" onClick={(e) => e.stopPropagation()}>
                        <h1>Ste si istý že chcete vymazať pretek Gessayov Cup {year}?</h1>
                        <p>Táto akcia je nenávratná.</p>
                        <div className="delete-dialog__buttons">
                          <Button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold"
                            onClick={() => setDeletingYear(undefined)}
                          >
                            Zrušiť
                          </Button>
                          <Button
                            disabled={isPending}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold"
                            onClick={() => {
                              deleteRace(year).then(() => setDeletingYear(undefined));
                            }}
                          >
                            {isPending ? <Spinner /> : "Potvrdiť"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
