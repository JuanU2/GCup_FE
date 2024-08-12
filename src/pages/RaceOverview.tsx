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
  const { mutateAsync: deleteRace, isPending } = useRaceDelete()
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const { data: raceData, isLoading: racesLoading } = useQuery({
    queryKey: ["races"],
    queryFn: getMany,
  });
  return (
    <>
      <NavBar />
      <h1 className="font-bold font-lg text-center p-6 text-2xl">
        Registrácia na pretek, vyberte pretek:
      </h1>
      <div className="race-overview">
        {racesLoading ? (
          <Spinner />
        ) : (
          raceData.map((race: any) => {
            const raceDate = new Date(race.raceDate)
            const year = new Date(race.raceDate).getFullYear().toString();
            return (
              <Card className="flex flex-col w-fit p-6">
                {isAuthenticated ? (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setDeletingYear(year)}
                      className="border-black border-2 rounded hover:bg-red-500 bg-red-400 p-1"
                    >
                      <TrashIcon className="h-6 text-white" />
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                <h1 className="text-center font-bold">Gessayov Cup {year}</h1>
                <hr />
                <div className="grid grid-cols-2 text-center content-center">
                  <CalendarIcon />
                  <section>
                    {ConvertToDateString(new Date(race.raceDate))}
                  </section>
                  <div className="col-span-2 lg:flex">
                    <div className="button-container">
                      <Link to={"/pretek/" + year}>
                        <Button className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                          Detail preteku
                        </Button>
                      </Link>
                    </div>
                    <div className="button-container">
                      <Link className={(raceDate < today) ? "hover:cursor-default" : ""} to={(raceDate < today)? "#" : "/registracia/" + year}>
                        <Button disabled={ raceDate < today} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Registrovať sa
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                {deletingYear ? (
                  <div className="delete-form__container rounded-xl gap-6">
                    <h1>
                      Ste si istý že chcete vymazať pretek Gessayov Cup {year}?
                    </h1>
                    <h2>
                        Táto akcia je nenávratná
                    </h2>
                    <div className="flex w-full justify-end align-center gap-6">
                        <Button className="bg-gray-500 font-bold" onClick={() => setDeletingYear(undefined)}>Zrušiť</Button>
                        <Button disabled={isPending} className="bg-red-500 font-bold" onClick={() => {
                            deleteRace(year).then(() => setDeletingYear(undefined));
                        }} >{isPending ? <Spinner/> : "Potvrdiť"}</Button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </Card>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
}
