import styles from './Doctors.module.css';
import { Link } from "react-router-dom";
const DoctorCard = ({ data }) => {
    return (
        <Link className={`${styles.doctor_card}`} to={`/doctors/${data.id}`}>
            <img src={data.image} alt={data.name} />
            <div className={styles.doctor_descr}>
                <h3>{data.name}</h3>
                <p>{data.specialty}</p>
            </div>
        </Link>
    );
};

export default DoctorCard;