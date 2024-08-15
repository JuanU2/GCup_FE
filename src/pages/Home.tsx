import NavBar from "../components/NavBar";
import "./Home.css";
import bikers1 from "../assets/images/image__bikers1.jpg";
import bikers2 from "../assets/images/image__bikers2.jpg";
import bikers3 from "../assets/images/image__bikers3.jpg";
import Logo from "../assets/images/logo-white.svg";
import Facebook from "../assets/images/facebook.svg";
import Maps from "../assets/images/maps.svg";
import Zalesie from "../assets/images/zalesie.png"
import { Card, CardContent } from "../@/components/ui/card";
import "./Caroussel.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../@/components/ui/carousel";
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
            <h2 className="lg:text-4xl text-center text-2xl">Príďte si zabicyklovať aj vy!</h2>
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
      <div className="lg:grid flex flex-col lg:grid-cols-2 gap-6 lg:gap-24 px-2 lg:px-12 pt-12">
        <RouteMap/>
        <div className="flex flex-col gap-6 text-center lg:text-right text-black divide-black px-6 ">
            <h2 className="text-4xl font-bold">
                TRASA
            </h2>
            <hr />
            <div className="text-l lg:text-xl">
            Táto pretekárska cyklotrasa s dĺžkou 4,8 km ponúka dynamický a zaujímavý zážitok. Štartuje sa na úseku, ktorý vedie pomedzi stromy, pričom po 1,51 km prechádzate okolo orientačného bodu "U Rusa". O ďalších 100 metrov sa dostávate na úsek známy ako "U Včelára", kde sa začína mierne otvorený terén popri poli. Finálna rovinka vás prevedie popri psiom hoteli, kde sa cyklisti môžu pripraviť na posledný šprint do cieľa. Trasa je navrhnutá tak, aby ponúkla zaujímavé výzvy a krásne scenérie, ideálna pre súťaživých aj rekreačných jazdcov.
            </div>
            <div className="hidden lg:flex flex-col items-center">
                <img src={Zalesie} alt="Obec Zálesie" className="w-52 p-6"/>
                <div className="text-4xl h-full">Obec Zálesie</div>
            </div>
        </div>
      </div>
      <div className="home-page">
        <div className="home-page__intro">
          <div className="home-page__intro__text grid grid-cols-2">
            <section className="intro__text-container">
              <strong>Vítame vás</strong> na oficiálnej stránke cyklopreteku{" "}
              <strong>Gessayov Cup!</strong> Tento jedinečný pretek sa koná
              každoročne na Deň otcov a je oslavou športového ducha a susedského
              priateľstva. Gessayov Cup nie je len o pretekaní, ale aj o
              spoločnom zážitku a zábave pre celú rodinu. Trasa vedie cez
              malebné lesy v okolí Zálesia, poskytujúc pretekárom nádherný
              výhľad a možnosť vychutnať si prírodu na bicykli. Je to ideálna
              príležitosť, ako stráviť deň s rodinou a priateľmi v pohybe a na
              čerstvom vzduchu.
            </section>
            <div className="intro__image-container">
              <img className="intro__home-image" src={bikers1} alt="" />
            </div>
            <div className="intro__image-container">
              <img className="intro__home-image" src={bikers2} alt="" />
            </div>
            <section className="intro__text-container">
              <h2>Pre všetky vekové kategórie</h2>
              <section>
                Či už ste skúsený cyklista alebo úplný začiatočník, Gessayov Cup
                je pre vás. Pretek je otvorený pre všetky vekové kategórie, od
                najmenších detí až po seniorov. Pre deti a rodiny sú pripravené
                kratšie a menej náročné trasy, zatiaľ čo pre tých náročnejších
                máme pripravené dlhšie a technicky zložitejšie úseky.
              </section>
            </section>
            <section className="intro__text-container">
              <h2>Príďte a zažite to s nami</h2>
              Pozývame vás, aby ste sa pridali k nám na tento výnimočný deň a
              zúčastnili sa Gessayov Cupu. Nezáleží na tom, či chcete pretekať,
              alebo len prísť povzbudzovať a stráviť čas s rodinou a priateľmi -
              dôležité je, že ste súčasťou našej komunity. <br /> <br />
              Tešíme sa na vás na Deň otcov v na Hornozelenickej Zálesii!
            </section>
            <div className="intro__image-container">
              <img className="intro__home-image" src={bikers3} alt="" />
            </div>
          </div>
          <div className="carousel__home">
            <Carousel className="w-4/5">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="carousel__card">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="block w-full text-center">
                          <h2 className="caroussel--headline">
                            Vítame vás na oficiálnej stránke cyklopreteku{" "}
                            <strong>Gessayov Cup!</strong>
                          </h2>
                          <img src={bikers1} className="p-8" alt="..." />
                          <p>
                            Tento jedinečný pretek sa koná každoročne na Deň
                            otcov a je oslavou športového ducha a susedského
                            priateľstva. Gessayov Cup nie je len o pretekaní,
                            ale aj o spoločnom zážitku a zábave pre celú rodinu.
                            Trasa vedie cez malebné lesy v okolí Zálesia,
                            poskytujúc pretekárom nádherný výhľad a možnosť
                            vychutnať si prírodu na bicykli. Je to ideálna
                            príležitosť, ako stráviť deň s rodinou a priateľmi v
                            pohybe a na čerstvom vzduchu.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="carousel__card">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="block w-full">
                          <h2 className="caroussel--headline">
                            Pre všetky vekové kategórie
                          </h2>
                          <img src={bikers2} className="p-8" alt="..." />
                          <p>
                            Či už ste skúsený cyklista alebo úplný začiatočník,
                            Gessayov Cup je pre vás. Pretek je otvorený pre
                            všetky vekové kategórie, od najmenších detí až po
                            seniorov. Pre deti a rodiny sú pripravené kratšie a
                            menej náročné trasy, zatiaľ čo pre tých náročnejších
                            máme pripravené dlhšie a technicky zložitejšie
                            úseky.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="carousel__card">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="block w-full">
                          <h2 className="caroussel--headline">
                            Príďte a zažite to s nami
                          </h2>
                          <img src={bikers3} className="p-8" alt="..." />
                          <p>
                            Pozývame vás, aby ste sa pridali k nám na tento
                            výnimočný deň a zúčastnili sa Gessayov Cupu.
                            Nezáleží na tom, či chcete pretekať, alebo len prísť
                            povzbudzovať a stráviť čas s rodinou a priateľmi -
                            dôležité je, že ste súčasťou našej komunity. <br />{" "}
                            <br />
                            Tešíme sa na vás na Deň otcov v na Hornozelenickej
                            Zálesii!
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="w-full p-12 flex flex-col justify-center gap-6">
          <div className="bg-red-300 border-2 border-black rounded text-center p-6">
            <h1>
              <strong className="font-bold text-xl">Pozor!</strong>
            </h1>
            <section>
              Osoby staršie ako 18 rokov platia za účasť na mieste štartovný
              poplatok <strong className="font-bold">5 €</strong> pri prevzatí
              štartovného čísla.
            </section>
          </div>
          <div className="w-full flex justify-center">
            <Link to="/registracia">
              <Button className="font-bold text-white">Registrovať sa</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
