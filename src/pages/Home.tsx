import NavBar from "../components/NavBar";
import routes from "../routes";
import "./Home.css"

export default function Home() {
  return (
    <div className="home-page">
        <NavBar options={routes}/>
        <div className="home-page__intro grid">
            <h1 className="home-page__intro__headline">
                Príďte si zabicyklovať aj vy!
            </h1>
            <div className="home-page__intro__text">
                <section>
                    Vítame vás na oficiálnej stránke cyklopreteku Gessayov Cup! Tento jedinečný pretek sa koná každoročne na Deň otcov a je oslavou športového ducha a susedského priateľstva. Gessayov Cup nie je len o pretekaní, ale aj o spoločnom zážitku a zábave pre celú rodinu. Trasa vedie cez malebné lesy v okolí Zálesia, poskytujúc pretekárom nádherný výhľad a možnosť vychutnať si prírodu na bicykli. Je to ideálna príležitosť, ako stráviť deň s rodinou a priateľmi v pohybe a na čerstvom vzduchu.
                </section>
                <section>
                    <h2>
                        Pre všetky vekové kategórie
                    </h2>
                    <section>
                        Či už ste skúsený cyklista alebo úplný začiatočník, Gessayov Cup je pre vás. Pretek je otvorený pre všetky vekové kategórie, od najmenších detí až po seniorov. Pre deti a rodiny sú pripravené kratšie a menej náročné trasy, zatiaľ čo pre tých náročnejších máme pripravené dlhšie a technicky zložitejšie úseky.
                    </section>
                </section>
                <section>
                    <h2>
                        Príďte a zažite to s nami
                    </h2>
                    Pozývame vás, aby ste sa pridali k nám na tento výnimočný deň a zúčastnili sa Gessayov Cupu. Nezáleží na tom, či chcete pretekať, alebo len prísť povzbudzovať a stráviť čas s rodinou a priateľmi - dôležité je, že ste súčasťou našej komunity. <br /> <br />Tešíme sa na vás na Deň otcov v Zálesii!
                </section>
            </div>
        </div>
    </div>
  )
}
