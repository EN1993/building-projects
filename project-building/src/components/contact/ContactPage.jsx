import Footer from "../layout/footer/Footer";
import styles from "../contact/ContactPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Heading from "../layout/Heading";

const ContactPage = () => {
  return (
    <>
      <main>
        <div className={styles.contactWelcomePage}>
          <div className={styles.contactUsInfo}>
            <Heading content=" Contact Us Now " size="3" />
            <p>
              <FaPhoneAlt className={styles.footerContenIcons} /> 0047 22 00 44
              00
            </p>
            <p>
              <GrMail className={styles.footerContenIconsGM} />
              skycityinc@info.no
            </p>
            <p>
              <AiFillPlayCircle className={styles.footerContenIconsPC} />
            </p>
            <p>
              <BsFacebook className={styles.footerContenIcons} />
            </p>
            {/* <Heading content=" Follow Us " size="3" /> */}
            <span className={styles.followContent}>
              <p>&copy; 2024 Sky City Inc</p>
              <p>Created by Sky City Inc</p>
            </span>
          </div>
          <div className={styles.contactMessage}>
            <form action="">
              <div className={styles.name}>
                <div className={styles.contactMessageFn}>
                  <label htmlFor="fornavn">Fornavn</label>
                  <input type="name" />
                </div>

                <div className={styles.contactMessageEn}>
                  <label htmlFor="fornavn">Etternavn</label>
                  <input type="name" />
                </div>
              </div>
              <div className={styles.contactMessageEp}>
                <label htmlFor="e-post">E-post</label>
                <input type="email" />
              </div>
              <div className={styles.contactMessageMe}>
                <label htmlFor="melding">Melding</label>
                <textarea name="message" id=""></textarea>
              </div>
              <div className={styles.contactMessageCta}>
                <button>Send</button>
              </div>
            </form>
          </div>
          <div className={styles.contactNav}></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
