import styles from './Cover.module.css';
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
function Cover() {
    return (
        <div className={styles.cover}>
            <div className="container">
                <div className={styles.left_side}>
                    <h2>
                        İxtisaslaşmış Tibbi Xidmətin Tək Ünvanı!
                    </h2>
                    <Link href="">Bütün xidmətlər
                        <span><MdArrowOutward />
                        </span>
                    </Link>
                </div>
                <div className={styles.right_side}>

                </div>
            </div>
        </div>
    )
}
export default Cover;
