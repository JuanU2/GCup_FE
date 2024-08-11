import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Print.css"
import { getMany } from "../api/raceApi";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";
import ArrowRight from "../assets/images/arrow-right.svg"

export default function YearSelect() {
    const { data: raceData, isLoading: racesLoading } = useQuery({
        queryKey: ["races"],
        queryFn: getMany,
      });
  return (
    <>
    <NavBar/>
    <div className="print-page">
        <h1 className="w-full text-center p-12 text-xl font-bold">
            Vyberte rok preteku Gessayov Cup:
        </h1>
        <div className="flex flex-col w-full p-12 lg:p-48 gap-12 align-center justify-evenly">
            {racesLoading ? <Spinner size="xl" /> : raceData.map((race: any) => 
            <Link to={"./" + race.year.toString()} key={race.year} className="print-card flex bg-gray-200 p-6 justify-between rounded-xl">
                <span>
                    Rok {race.year.toString()}
                </span>
                <img src={ArrowRight} alt="Vpravo" className="h-6" />
            </Link>)}
        </div>
    </div>
    <Footer/>
    </>
  )
}
