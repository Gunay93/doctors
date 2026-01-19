import styles from "./FloatingActions.module.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/9940000000"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.wrapper} ${styles.whatsapp}`}
      >
        <div className={styles.button}>
          <span className={styles.pulse}></span>
          <span className={styles.pulse}></span>
          <span className={styles.pulse}></span>

          <div className={styles.icon}>
            <FaWhatsapp size={22} />
          </div>
        </div>
      </a>

      <a
        href="tel:+9940000000"
        className={`${styles.wrapper} ${styles.phone}`}
      >
        <div className={styles.button}>
          <span className={styles.pulse}></span>
          <span className={styles.pulse}></span>
          <span className={styles.pulse}></span>

          <div className={styles.icon}>
            <FaPhoneAlt size={20} />
          </div>
        </div>
      </a>
    </>
  );
}