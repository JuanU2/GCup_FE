import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Card } from "@mui/material";
import { Button } from "../@/components/ui/button";
import { PrinterIcon } from "lucide-react";
import { usePrintAll } from "../hooks/printer";
import { useState } from "react";
import ListToPrint from "../components/ListToPrint";

export default function NumberPrint() {
    const {year} = useParams();
    const [selecting, setSelecting] = useState(false);
    const {mutateAsync: printAll} = usePrintAll(year ?? "");

  return (
    <>
    <NavBar/>
    <div className="print-page">
        <h1 className="font-bold text-2xl text-center p-6">
            Tlač čísel pre Gessayov Cup {year}.
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 p-12 w-full justify-evenly align-center">
            <Card className="flex flex-col gap-6 p-6 text-center">
                <h1>
                    Vytlačiť všetky doposiaľ nevytlačené čísla.
                </h1>
                <PrinterIcon className="h-24 w-full" />
                <Button onClick={async () => await printAll()}>
                    Odoslať na tlač
                </Button>
            </Card>
            <Card className="flex flex-col gap-6 p-6 text-center">
                <h1>
                    Vytlačiť číslo konkrétneho účastníka
                </h1>
                <PrinterIcon className="h-24 w-full" />
                <Button onClick={() => setSelecting(true)}>
                    Vybrať účastníka
                </Button>
            </Card>
        </div>
        {selecting && 
        <div className="edit-form__container">
            <h1 className="text-2xl">
                Tlač čísla
            </h1>
            <ListToPrint year={year}/>
            <Button onClick={() => setSelecting(false)}>
                Zavrieť
            </Button>
        </div>}
    </div>
    <Footer/>
    </>
  )
}
