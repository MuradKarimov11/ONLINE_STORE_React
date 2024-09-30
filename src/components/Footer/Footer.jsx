import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from "../../styles/Footer.module.css";

import LOGO from '../../images/logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" /> 
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{" "}
        <a href="https://github.com/MuradKarimov11?tab=repositories" 
          target="_blank" 
          rel="noreferrer">
          Murad Karimov
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="socials-icon"/>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="socials-icon"/>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="socials-icon"/>
        </a>

      </div>
    </section>
  );
}

export default Footer;
