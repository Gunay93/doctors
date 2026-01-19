import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import styles from './Footer.module.css';
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className={styles.footer_contact}>
              <img src="/img/Logo-white.svg" alt="" />
              <p>Qafqazın ilk və yeganə <br /><span> QULAQ BURUN BOĞAZ VƏ BAŞ-BOYUN MƏRKƏZİ!</span></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.footer_contact}>
              <h5>Əlaqə</h5>
              <a href=""><CiPhone />*0111</a>
              <a href="mailto:info@lorhospital.az" className={styles.email}><CiMail />info@lorhospital.az</a>
              <address><CiLocationOn /><span>Bakı ş., Nərimanov r., Əhməd Rəcəbli 19K, AZ1075</span></address>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.footer_contact}>
              <h5>ABUNƏ OLUN</h5>
              <a href=""><FiFacebook />Lor Hospital</a>
              <a href=""><CiInstagram />Lor Hospital</a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className={styles.social}>
              <a href=""><FiFacebook /></a>
              <a href=""><AiFillInstagram /></a>
              <a href=""><FaYoutube /></a>
              <a href=""><FaWhatsapp /></a>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.footer_subscribe}>
              <input type="text" placeholder="Sualınız var?" />
              <button><FaArrowRight /></button>
            </div>
          </div>
        </div>
        <span className={styles.divider}></span>
      </div>
    </footer>
  );
}

export default Footer; 