import { useParams } from "react-router-dom";
import { doctorsMock } from "../../data/doctors";
import styles from "./Doctors.module.css";
import { useState } from "react";
import { FaUserMd } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const DoctorDetail = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("info");

    const doctor = doctorsMock.find(
        (item) => item.id === Number(id)
    );

    if (!doctor) return <p>Həkim tapılmadı</p>;

    return (
        <div className={styles.doctor_detail}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.image_wrap}>
                        <img src={doctor.image} alt={doctor.name} />
                    </div>

                    <div className={styles.top_info}>
                        <h2>{doctor.name}</h2>
                        <p>{doctor.specialty}</p>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <FaUserMd />
                                <div>
                                    <strong>{doctor.experience} il</strong>
                                    <span>Təcrübə</span>
                                </div>
                            </div>

                            <div className={styles.stat}>
                                <FaUsers />
                                <div>
                                    <strong>{doctor.patients}</strong>
                                    <span>Pasiyent sayı</span>
                                </div>
                            </div>

                            <div className={styles.stat}>
                                <FaStar />
                                <div>
                                    <strong>{doctor.reviews}</strong>
                                    <span>Rəylər</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.tabs}>
                    <button
                        onClick={() => setActiveTab("info")}
                        className={activeTab === "info" ? styles.active : ""}
                    >
                        Məlumat
                    </button>

                    <button
                        onClick={() => setActiveTab("articles")}
                        className={activeTab === "articles" ? styles.active : ""}
                    >
                        Həkimin məqalələri
                    </button>

                    <button
                        onClick={() => setActiveTab("reviews")}
                        className={activeTab === "reviews" ? styles.active : ""}
                    >
                        Rəylər
                    </button>
                </div>

                {activeTab === "info" && (
                    <table className={styles.info_table}>
                        <tbody>
                            <tr>
                                <td className={styles.label}>Vəzifə</td>
                                <td className={styles.value}>{doctor.specialty}</td>
                            </tr>

                            <tr>
                                <td className={styles.label}>Mərkəz</td>
                                <td className={styles.value}>{doctor.center}</td>
                            </tr>

                            <tr>
                                <td className={styles.label}>Təhsil</td>
                                <td className={styles.value}>
                                    <ul className={styles.list}>
                                        {doctor.education.map((item, i) => (
                                            <li key={i}>
                                                <span className={styles.check}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>

                            <tr>
                                <td className={styles.label}>
                                    Müayinə və müalicə istiqamətləri
                                </td>
                                <td className={styles.value}>
                                    <ul className={styles.list}>
                                        {doctor.treatments.map((item, i) => (
                                            <li key={i}>
                                                <span className={styles.check}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {activeTab === "articles" && (
                    <div className={styles.empty}>Məqalə tapılmadı</div>
                )}

                {activeTab === "reviews" && (
                    <div className={styles.empty}>Rəy yoxdur</div>
                )}
            </div>
        </div>
    );
};

export default DoctorDetail;
