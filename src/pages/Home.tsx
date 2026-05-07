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
      {/* Hero Section */}
      <div className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">Gessayov Cup</h1>
          <p className="hero__subtitle">
            Každoročný cyklistický pretek pre celú rodinu na Deň otcov
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="intro">
        <div className="intro__container">
          <div className="intro__text">
            <h2 className="intro__heading">Príďte si zabicyklovať aj vy!</h2>
            <hr className="intro__divider" />
            <p className="intro__paragraph">
              Radi vás pozývame na deň otcov na náš susedský pretek Gessayov
              Cup! Oslávte s nami tento výnimočný deň, kde sú vítaní všetci, bez
              ohľadu na vek. Či už ste najmladší alebo najstarší, pridajte sa k
              nám a užite si deň plný zábavy a priateľskej súťaže. Pamätajte,
              dôležité je zúčastniť sa, nie vyhrať. Tešíme sa na vás!
            </p>
          </div>
          <img src={Logo} className="intro__logo" alt="Logo" />
        </div>
      </div>

      {/* Social bar */}
      <div className="social-bar">
        <a target="_blank" href="https://www.facebook.com/GesajovCup" rel="noopener noreferrer" className="social-bar__link">
          <img src={Facebook} alt="facebook logo" className="social-bar__icon" />
          <span>Sledujte nás na Facebooku</span>
        </a>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Hornozelenck%C3%A1+400%2F2,+900+28+Z%C3%A1lesie/@48.1704789,17.2800282,19.04z/data=!4m6!3m5!1s0x476c85ac7c9fe87b:0x76b62be68ea6a93!8m2!3d48.1703268!4d17.2806932!16s%2Fg%2F11td1fdw0p?entry=ttu"
          rel="noopener noreferrer"
          className="social-bar__link"
        >
          <img src={Maps} alt="mapy" className="social-bar__icon" />
          <span>Nájdite nás na mape</span>
        </a>
      </div>

      {/* Route Section */}
      <div className="route-section">
        <div className="route-section__grid">
          <RouteMap />
          <div className="route-section__info">
            <h2 className="route-section__title">TRASA</h2>
            <hr className="route-section__divider" />
            <p className="route-section__text">
              Táto pretekárska cyklotrasa s dĺžkou 4,8 km ponúka dynamický a
              zaujímavý zážitok. Štartuje sa na Hornozelenickej ulici, pri známom
              orientačnom bode "pod orechom". Trasa pokračuje po Siladickej ceste
              smerom k psiemu hotelu, odkiaľ sa vchádza do príjemného lesného
              úseku. Po prechode lesíkom sa napojíte na poľnú cestu, ktorá vás
              privedie k otvorenému terénu známeho ako "U Rusa", približne po 1,2
              km jazdy. O ďalších 100 metrov nasleduje orientačný bod "U Včelára",
              kde trasa opäť vchádza do časti s vyšším porastom. Finálna rovinka
              vedie popri poliach až k cieľu, pričom pretekári míňajú farmu, kde
              sa môžu pripraviť na posledný šprint. Trasa je navrhnutá tak, aby
              ponúkla pútavé výzvy a nádherné scenérie, a je vhodná pre súťaživých
              aj rekreačných jazdcov.
            </p>
            <div className="route-section__badge">
              <img src={Zalesie} alt="Obec Zálesie" className="route-section__badge-img" />
              <span className="route-section__badge-text">Obec Zálesie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Registration CTA Section */}
      <div className="cta-section">
        <div className="cta-section__grid">
          <div className="cta-section__left">
            <h1 className="cta-section__heading">REGISTRÁCIA</h1>
            <hr className="cta-section__divider" />
            <h2 className="cta-section__subheading">
              Ste pripravení na výzvu?
            </h2>
            <p className="cta-section__text">
              Nezmeškajte príležitosť stať sa súčasťou jedinečného športového
              podujatia! Naša cyklistická súťaž je ideálnou príležitosťou, ako
              si užiť deň plný zábavy, konkurencie a osobných víťazstiev. Či už
              ste skúsený jazdec alebo len začínate, nájdete u nás výzvy, ktoré
              vás nadchnú!
            </p>
            <div className="cta-section__reasons">
              <h2>Prečo sa zaregistrovať?</h2>
              <hr />
              <ul>
                <li>
                  <h3>Skvelá atmosféra</h3>
                  <p>
                    Pretek je viac než len závod - je to oslava cyklistiky a
                    komunitného ducha.
                  </p>
                </li>
                <li>
                  <h3>Cenné ceny</h3>
                  <p>
                    Čakajú vás skvelé odmeny a trofeje pre víťazov rôznych
                    kategórií.
                  </p>
                </li>
                <li>
                  <h3>Krásne prostredie</h3>
                  <p>
                    Užívajte si jazdu v krásnych scenériách a prírodných
                    úsekoch.
                  </p>
                </li>
                <li>
                  <h3>Skvelá komunita</h3>
                  <p>
                    Spoznajte nových priateľov a prežite nezabudnuteľný deň v
                    spoločnosti nadšencov cyklistiky.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cta-section__right">
            <h1 className="cta-section__cta-heading">
              Nečakajte a prihláste sa ešte dnes!
            </h1>
            <p className="cta-section__cta-text">
              Vyplňte náš jednoduchý registračný formulár a zabezpečte si miesto
              v pretekoch. Čím skôr sa prihlásite, tým viac času budete mať na
              prípravu a tréning.
            </p>
            <Link to="/registracia">
              <Button className="cta-section__button">
                Zaregistrujte sa tu!
              </Button>
            </Link>
            <div className="cta-section__note">
              <h1>Pozor!</h1>
              <p>
                Osoby staršie ako 18 rokov platia za účasť na mieste štartovný
                poplatok <strong>5 €</strong> pri prevzatí štartovného čísla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <div className="location-section__grid">
          <img
            src={Hornozelenicka}
            alt="hornozelenická ulica"
            className="location-section__image"
          />
          <div className="location-section__info">
            <h1 className="location-section__title">LOKALITA</h1>
            <hr className="location-section__divider" />
            <p>
              Pretek sa každoročne odohráva na{" "}
              <strong>Hornozelenickej ulici</strong>{" "}
              <i>(900 28 Zálesie)</i>, s ikonickým miestom{" "}
              <strong>"pod Orechom"</strong> ako štartom aj cieľom. Táto lokalita
              je nielen symbolom komunity, ale aj miestom, kde sa stretávajú
              športoví nadšenci pre nezabudnuteľný deň.
            </p>
            <span className="location-section__gps">
              GPS: 48.170026, 17.280366
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
