import NavBar from "../components/NavBar";
import "./Home.css";
import Logo from "../assets/images/logo-white.svg";
import Facebook from "../assets/images/facebook.svg";
import Maps from "../assets/images/maps.svg";
import Zalesie from "../assets/images/zalesie.png";
import Hornozelenicka from "../assets/images/hornozelenicka.jpg";
import Footer from "../components/Footer";
import { Button } from "../@/components/ui/button";
import { Link } from "react-router-dom";
import RouteMap from "../components/RouteMap";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="p-6 py-0 pt-12 bg-gray-700 text-white">
        <h1 className="home-page__intro__headline">Gessayov Cup</h1>
        <div className="home__i-want-you__container flex-col lg:flex-row gap-12 flex flex-col items-center lg:flex-row">
          <div className="flex flex-col gap-6 align-center justify-center h-max lg:w-1/2">
            <h2 className="lg:text-4xl text-center text-2xl">
              Príďte si zabicyklovať aj vy!
            </h2>
            <hr />
            <p className="text-xl text-center lg:text-left">
              Radi vás pozývame na deň otcov na náš susedský pretek Gessayov
              Cup! Oslávte s nami tento výnimočný deň, kde sú vítaní všetci, bez
              ohľadu na vek. Či už ste najmladší alebo najstarší, pridajte sa k
              nám a užite si deň plný zábavy a priateľskej súťaže. Pamätajte,
              dôležité je zúčastniť sa, nie vyhrať. Tešíme sa na vás!
            </p>
          </div>
          <img src={Logo} className="w-32 lg:w-48" alt="Logo" />
        </div>
      </div>
      <div className="flex p-6 justify-center lg:justify-between gap-6 items-center py-2 bg-gray-600">
        <div className="flex justify-start gap-6 px-12">
          <a target="_blank" href="https://www.facebook.com/GesajovCup">
            <img src={Facebook} alt="facebook logo" className="h-10" />
          </a>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Hornozelenck%C3%A1+400%2F2,+900+28+Z%C3%A1lesie/@48.1704789,17.2800282,19.04z/data=!4m6!3m5!1s0x476c85ac7c9fe87b:0x76b62be68ea6a93!8m2!3d48.1703268!4d17.2806932!16s%2Fg%2F11td1fdw0p?entry=ttu"
          >
            <img src={Maps} alt="mapy" className="h-10" />
          </a>
        </div>
      </div>
      <div className="lg:grid flex flex-col lg:grid-cols-2 gap-6 lg:gap-24 px-2 lg:px-12 p-12">
        <RouteMap />
        <div className="flex flex-col gap-6 text-center lg:text-right text-black divide-black px-6 ">
          <h2 className="text-4xl font-bold">TRASA</h2>
          <hr />
          <div className="text-l lg:text-xl">
            Táto pretekárska cyklotrasa s dĺžkou 4,8 km ponúka dynamický a
            zaujímavý zážitok. Štartuje sa na úseku, ktorý vedie pomedzi stromy,
            pričom po 1,51 km prechádzate okolo orientačného bodu "U Rusa". O
            ďalších 100 metrov sa dostávate na úsek známy ako "U Včelára", kde
            sa začína mierne otvorený terén popri poli. Finálna rovinka vás
            prevedie popri farme, kde sa cyklisti môžu pripraviť na
            posledný šprint do cieľa. Trasa je navrhnutá tak, aby ponúkla
            zaujímavé výzvy a krásne scenérie, ideálna pre súťaživých aj
            rekreačných jazdcov.
          </div>
          <div className="hidden lg:flex flex-col items-center">
            <img src={Zalesie} alt="Obec Zálesie" className="w-52 p-6" />
            <div className="text-4xl h-full">Obec Zálesie</div>
          </div>
        </div>
      </div>
      <div className="home__cyclist__container">
        <div className="home__cyclist__container__element pt-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 lg:p-24 text-white divide-white">
            <h1 className="font-bold text-2xl text-center lg:text-left lg:text-4xl">
              REGISTRÁCIA
            </h1>
            <hr />
            <h2 className="text-xl text-center lg:text-left lg:text-3xl">
              🚴‍♂️ Ste pripravení na výzvu? 🚴‍♀️
            </h2>
            <p className="text-l text-center lg:text-left lg:text-xl">
              Nezmeškajte príležitosť stať sa súčasťou jedinečného športového
              podujatia! Naša cyklistická súťaž je ideálnou príležitosťou, ako
              si užiť deň plný zábavy, konkurencie a osobných víťazstiev. Či už
              ste skúsený jazdec alebo len začínate, nájdete u nás výzvy, ktoré
              vás nadchnú!
            </p>
            <div className="hidden lg:flex flex-col border-white gap-3 border-2 rounded-xl p-3">
              <h2 className="font-bold text-xl lg:text-2xl">
                Prečo sa zaregistrovať?
              </h2>
              <hr />
              <ul className="list-disc p-6 text-l">
                <li>
                  <h3 className="font-bold">🌟 Skvelá atmosféra:</h3>
                  <p>
                    Pretek je viac než len závod - je to oslava cyklistiky a
                    komunitného ducha.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">🏆 Cenné ceny:</h3>
                  <p>
                    Čakajú vás skvelé odmeny a trofeje pre víťazov rôznych
                    kategórií.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">🌿 Krásne prostredie:</h3>
                  <p>
                    Užívajte si jazdu v krásnych scenériách a prírodných
                    úsekoch.
                  </p>
                </li>
                <li>
                  <h3 className="font-bold">🤝 Skvelá komunita:</h3>
                  <p>
                    Spoznajte nových priateľov a prežite nezabudnuteľný deň v
                    spoločnosti nadšencov cyklistiky.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col text-white items-center text-center gap-6 p-6 justify-center">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Nečakajte a prihláste sa ešte dnes!
            </h1>
            <p className="text-l lg:text-xl">
              Vyplňte náš jednoduchý registračný formulár a zabezpečte si miesto
              v pretekoch. Čím skôr sa prihlásite, tým viac času budete mať na
              prípravu a tréning.
            </p>
            <Link to="/registracia" className="p-3 lg:p-12">
              <Button className="font-bold h-24 w-64 lg:w-full p-6 text-white text-2xl lg:text-4xl bg-green-700 hover:bg-green-800 border-green-900 border-8">
                Zaregistrujte sa tu!
              </Button>
            </Link>
            <div className="lg:w-1/2 text-center p-6">
              <h1>
                <strong className="font-bold text-xl">Pozor!</strong>
              </h1>
              <section>
                Osoby staršie ako 18 rokov platia za účasť na mieste štartovný
                poplatok <strong className="font-bold">5 €</strong> pri prevzatí
                štartovného čísla.
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-12">
        <img
          src={Hornozelenicka}
          alt="hornozelenická ulica"
          className="rounded-xl"
        />
        <div className="text-center lg:text-right flex flex-col divide-black gap-6 p-6 lg:p-12">
          <h1 className="text-2xl font-bold lg:text-4xl">LOKALITA</h1>
          <hr />
          <p className="text-l lg:text-xl">
            Pretek sa každoročne odohráva na{" "}
            <strong className="font-bold">Hornozelenickej ulici</strong>, s
            ikonickým miestom{" "}
            <strong className="font-bold">"pod Orechom"</strong> ako štartom aj
            cieľom. Táto lokalita je nielen symbolom komunity, ale aj miestom,
            kde sa stretávajú športoví nadšenci pre nezabudnuteľný deň.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
