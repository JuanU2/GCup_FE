import { useEffect, useState } from "react"
import bikers1 from "../assets/images/image__bikers1.jpg"
import bikers2 from "../assets/images/image__bikers2.jpg"
import bikers3 from "../assets/images/image__bikers3.jpg"
import "./Caroussel.css"

export default function Caroussel() {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent(prevCount => prevCount + 1);
        }, 10000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, []);
  return (


<div id="default-carousel" className="relative lg:hidden w-full" data-carousel="slide">
    <div className="relative caroussel--height overflow-hidden rounded-lg md:h-96">
        <div className={((current == 0) ? "" : "hidden ") + "duration-700 ease-in-out"} data-carousel-item>
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 className="caroussel--headline">
                Vítame vás na oficiálnej stránke cyklopreteku <strong>Gessayov Cup!</strong>
                </h2>
                <img src={bikers1} className="p-8" alt="..."/>
                <p>
                Tento jedinečný pretek sa koná každoročne na Deň otcov a je oslavou športového ducha a susedského priateľstva. Gessayov Cup nie je len o pretekaní, ale aj o spoločnom zážitku a zábave pre celú rodinu. Trasa vedie cez malebné lesy v okolí Zálesia, poskytujúc pretekárom nádherný výhľad a možnosť vychutnať si prírodu na bicykli. Je to ideálna príležitosť, ako stráviť deň s rodinou a priateľmi v pohybe a na čerstvom vzduchu. 
                </p>
            </div>
        </div>
        <div className={((current == 1) ? "" : "hidden ") + "duration-700 ease-in-out"} data-carousel-item>
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 className="caroussel--headline">
                Pre všetky vekové kategórie
                </h2>
                <img src={bikers2} className="p-8" alt="..."/>
                <p>
                Či už ste skúsený cyklista alebo úplný začiatočník, Gessayov Cup je pre vás. Pretek je otvorený pre všetky vekové kategórie, od najmenších detí až po seniorov. Pre deti a rodiny sú pripravené kratšie a menej náročné trasy, zatiaľ čo pre tých náročnejších máme pripravené dlhšie a technicky zložitejšie úseky.
                </p>
            </div>
        </div>
        <div className={((current == 2) ? "" : "hidden ") + "duration-700 ease-in-out"} data-carousel-item>
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h2 className="caroussel--headline">
                Príďte a zažite to s nami
                </h2>
                <img src={bikers3} className="p-8" alt="..."/>
                <p>
                Pozývame vás, aby ste sa pridali k nám na tento výnimočný deň a zúčastnili sa Gessayov Cupu. Nezáleží na tom, či chcete pretekať, alebo len prísť povzbudzovať a stráviť čas s rodinou a priateľmi - dôležité je, že ste súčasťou našej komunity. <br /> <br />Tešíme sa na vás na Deň otcov v na Hornozelenickej Zálesii!
                </p>
            </div>
        </div>
    </div> 
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => setCurrent(current => (current - 1) % 3)}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => setCurrent(current => (current + 1) % 3)}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

  )
}
