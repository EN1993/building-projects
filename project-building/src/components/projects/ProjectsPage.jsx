import Footer from "../layout/footer/Footer";
import styles from "../projects/ProjectsPage.module.css";
import sc2img from "../images/sc2.jpg";
import sc5img from "../images/sc5.jpg";
import planimg from "../images/Plan.png";
import Heading from "../layout/Heading";

const ProjectsPage = () => {
  return (
    <>
      <main>
        <div className={styles.projectsWelcomeHeading}>
          <Heading content="Våre Prosjekter" size="1" />
        </div>
        <div className={styles.projectsWelcomePage}>
          <div className={styles.projectsPic1}>
            <img src={sc2img} alt="a house balcony" />
          </div>
          <div className={styles.projectsPic2}>
            <img src={sc5img} alt=" a house" />
          </div>
          <div className={styles.projectsPic3}>
            <img src={planimg} alt=" a house plan" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
