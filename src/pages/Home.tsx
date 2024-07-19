import NavBar from "../components/NavBar";
import "./Home.css"
import bikers1 from "../assets/images/image__bikers1.jpg"
import bikers2 from "../assets/images/image__bikers2.jpg"
import bikers3 from "../assets/images/image__bikers3.jpg"
import IWantYou from "../assets/images/i_want_you.jpg"
import Caroussel from "../components/Caroussel";

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="home-page">
        <div className="home-page__intro">
            <h1 className="home-page__intro__headline">
                Príďte si zabicyklovať aj vy!
            </h1>
            <div className="home__i-want-you__container">
                <img src={IWantYou} className="home__i-want-you" alt="I Want YOU!" />
            </div>
            <div className="home-page__intro__text grid grid-cols-2">
                <section className="intro__text-container">
                    <strong>Vítame vás</strong> na oficiálnej stránke cyklopreteku <strong>Gessayov Cup!</strong> Tento jedinečný pretek sa koná každoročne na Deň otcov a je oslavou športového ducha a susedského priateľstva. Gessayov Cup nie je len o pretekaní, ale aj o spoločnom zážitku a zábave pre celú rodinu. Trasa vedie cez malebné lesy v okolí Zálesia, poskytujúc pretekárom nádherný výhľad a možnosť vychutnať si prírodu na bicykli. Je to ideálna príležitosť, ako stráviť deň s rodinou a priateľmi v pohybe a na čerstvom vzduchu.
                </section>
                <div className="intro__image-container">
                    <img className="intro__home-image" src={bikers1} alt="" />
                </div>
                <div className="intro__image-container"><img className="intro__home-image" src={bikers2} alt="" /></div>
                <section className="intro__text-container">
                    <h2>
                        Pre všetky vekové kategórie
                    </h2>
                    <section>
                        Či už ste skúsený cyklista alebo úplný začiatočník, Gessayov Cup je pre vás. Pretek je otvorený pre všetky vekové kategórie, od najmenších detí až po seniorov. Pre deti a rodiny sú pripravené kratšie a menej náročné trasy, zatiaľ čo pre tých náročnejších máme pripravené dlhšie a technicky zložitejšie úseky.
                    </section>
                </section>
                <section className="intro__text-container">
                    <h2>
                        Príďte a zažite to s nami
                    </h2>
                    Pozývame vás, aby ste sa pridali k nám na tento výnimočný deň a zúčastnili sa Gessayov Cupu. Nezáleží na tom, či chcete pretekať, alebo len prísť povzbudzovať a stráviť čas s rodinou a priateľmi - dôležité je, že ste súčasťou našej komunity. <br /> <br />Tešíme sa na vás na Deň otcov v na Hornozelenickej Zálesii!
                </section>
                <div className="intro__image-container"><img className="intro__home-image" src={bikers3} alt="" /></div>
            </div>
            <Caroussel/>
        </div>
    </div>
    </>
  )
}
