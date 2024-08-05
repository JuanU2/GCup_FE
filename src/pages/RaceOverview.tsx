import { Card } from "../@/components/ui/card";
import { getMany } from "../api/raceApi";
import NavBar from "../components/NavBar";
import "./RaceOverview.css";
import { Spinner } from "flowbite-react";
import { CalendarIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"


function ConvertToDateString(date: Date): string {
  return new Intl.DateTimeFormat("sk-Sk", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function RaceOverview() {
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
          <Spinner size="xl" />
        ) : (
          raceData.map((race: any) => {
            const year = new Date(race.raceDate).getFullYear().toString();
            return (
              <Card className="flex flex-col w-fit p-6">
                <h1 className="text-center font-bold">Gessayov Cup {year}</h1>
                <hr />
                <div className="grid grid-cols-2 text-center content-center">
                  <CalendarIcon />
                  <section>
                    {ConvertToDateString(new Date(race.raceDate))}
                  </section>
                  <div className="button-container">
                    <Link to={"/pretek/" + year}>
                      <button className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Detail preteku
                      </button>
                    </Link>
                  </div>
                  <div className="button-container">
                    <Link to={"/registracia/" + year}>
                      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Registrovať sa
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
}
