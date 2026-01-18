import styles from "./FloatingActions.module.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActions() {
    return (
        <>
            {/* WhatsApp */}
            <a
                href="https://wa.me/994501234567"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.wrapper} ${styles.whatsapp}`}
            >
                <span className={styles.pulse}></span>
                <span className={styles.pulse}></span>
                <span className={styles.pulse}></span>

                <div className={styles.icon}>
                    <FaWhatsapp size={22} />
                </div>
            </a>

            {/* Phone */}
            <a
                href="tel:+994501234567"
                className={`${styles.wrapper} ${styles.phone}`}
            >
                <span className={styles.pulse}></span>
                <span className={styles.pulse}></span>
                <span className={styles.pulse}></span>

                <div className={styles.icon}>
                    <FaPhoneAlt size={20} />
                </div>
            </a>
        </>
    );
}
