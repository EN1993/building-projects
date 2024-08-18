import styles from "../home/Index.module.css";
import Footer from "../layout/footer/Footer";
import scimg1 from "../images/sc6.jpg";
import Heading from "../layout/Heading";

const HomePage = () => {
  return (
    <>
      <main>
        <div className={styles.homeWelcomePage}>
          <div>
            <div className={styles.homeWelcomePageHeading}>
              <Heading content="City Inc Boligbygging" size="1" />
              <Heading content="Et nytt liv til drømmeboliger" size="3" />
            </div>
            <img src={scimg1} alt=" a house with 3 floor " />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
