import Footer from "../layout/footer/Footer";
import styles from "../about/AboutPage.module.css";
import Heading from "../layout/Heading";
import sc1img from "../images/sc1.jpg";

const AboutPage = () => {
  return (
    <>
      <main>
        <div className={styles.aboutWelcomePage}>
          <div className={styles.aboutInfo}>
            <Heading content="Om oss" size="1" />
            <Heading content="Sky InC" size="2" />
            <Heading content="Boligbygging" size="2" />
            <p>
              Vi er utbygger som jobber med å utvikle bolig med fokus på
              miljøvennig. Vi bruker lokalt bygge matrielle, og er veldig
              opptatt av at kundene skal være fornøyd med vårt prosjekter
              leveranse. Klima, liv fremkomst, er noe vi virkerlig sett pris på
              når det gjelder vår prosjekter. Ikke nøl med å kontakte oss for en
              pratt, kaffe. Eller snakke med våre rådgiver, arkitekter og
              ingniøre som kan illustrele ditt drømmebolig.
            </p>
          </div>
          <div className={styles.aboutPic}>
            <img src={sc1img} alt=" a house balcony with furniture" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
