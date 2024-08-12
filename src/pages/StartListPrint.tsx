import { useParams } from "react-router-dom"
import { useGetRace } from "../hooks/race"
import Spinner from "../components/Spinner";
import { formatTime } from "../components/TableSticky";

export default function StartListPrint() {
    const {year} = useParams()
    const {isLoading, data: race} = useGetRace(year ?? "")
  return (
    <div className="w-full p-6 bg-white">
        {
            isLoading ? <Spinner /> : 
            (
            <div  className="w-full grid grid-cols-6">
                <div className="col-span-6 text-center">
                    <h1 className="font-bold text-2xl">Gessayov Cup {year}</h1>
                </div>
                {
                    race.categories.map( (category: any) => 
                        (
                            <>
                            <div className="col-span-6 font-bold p-2 bg-yellow-300">
                                {category.name}
                            </div>
                            <div className="border-2 border-black bg-blue-200">
                                Štartovacie č.
                            </div>
                            <div className="border-2 border-black bg-blue-200">
                                Meno
                            </div>
                            <div className="border-2 border-black bg-blue-200">
                                Priezvisko
                            </div>
                            <div className="border-2 border-black bg-blue-200">
                                Vek
                            </div>
                            <div className="border-2 border-black bg-blue-200">
                                Čas
                            </div>
                            <div className="border-2 border-black bg-blue-200">
                                Poradie
                            </div>
                            {category.cyclists.map( (cyclist: any, index: number) => (
                                <>
                                <div className={ ((index % 2 === 0) ? " bg-green-100 " : " bg-red-100 ") + "border-2 border-black"}>
                                    {cyclist.start_number}
                                </div>
                                <div className={ ((index % 2 === 0) ? " bg-green-100 " : " bg-red-100 ") + "border-2 border-black"}>
                                    {cyclist.name}
                                </div>
                                <div className={ ((index % 2 === 0) ? " bg-green-100 " : " bg-red-100 ") + "border-2 border-black"}>
                                    {cyclist.surname}
                                </div>
                                <div className={ ((index % 2 === 0) ? " bg-green-100 " : " bg-red-100 ") + "border-2 border-black"}>
                                    {cyclist.age}
                                </div>
                                <div className={ ((index % 2 === 0) ? " bg-green-100 " : " bg-red-100 ") + "border-2 border-black"}>
                                    {cyclist.time_seconds ? formatTime(cyclist.time_seconds) : "-"}
                                </div>
                                <div className={ ((index % 2 === 0) ? " bg-green-100 " : " bg-red-100 ") + "border-2 border-black"}>
                                    { cyclist.time_seconds ?
                                    (category.cyclists.slice()
                                        .sort((a: any, b: any) => {
                                            if (a.time_seconds === null) return 1;
                                            if (b.time_seconds === null) return -1;
                                            return a.time_seconds - b.time_seconds;
                                        }).indexOf(cyclist) + 1)  : "-"
                                        }
                                </div>
                                </>
                            ) )}
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            <div className="border-2 h-6 border-black">

                            </div>
                            </>
                        )
                    )
                }
            </div>
            )
        }
    </div>
  )
}
