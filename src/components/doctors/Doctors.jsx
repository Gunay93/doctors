import { useState } from "react";
import { doctorsMock } from "../../data/doctors";
import DoctorCard from "./DoctorCard";
import styles from "./Doctors.module.css";
import { FaChevronRight } from "react-icons/fa";

const Doctors = () => {
  const [active, setActive] = useState(7);
  const [search, setSearch] = useState("");

  const menuItems = [
    "Tariximiz",
    "Missiya və Məqsəd",
    "Keyfiyyət siyasəti",
    "Keyfiyyətə nəzarət",
    "Sertifikatlar",
    "Beynəlxalq əməkdaşlıq",
    "Mərkəzlərimiz",
    "Həkimlərimiz",
    "Məmnunluq anketi",
  ];

  const filteredDoctors = doctorsMock.filter((doctor) =>
    doctor.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.doctors_page}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className={styles.menu}>
              {menuItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setActive(index)}
                  className={`${styles.item} ${
                    active === index ? styles.active : ""
                  }`}
                >
                  <span>{item}</span>
                  <div className={styles.icon_wrapper}>
                    <FaChevronRight className={styles.icon} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <input
                  type="text"
                  className={styles.doctor_search}
                  placeholder="Həkimin Adı"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              {filteredDoctors.map((item) => (
                <div className="col-md-6" key={item.id}>
                  <DoctorCard data={item} />
                </div>
              ))}

              {filteredDoctors.length === 0 && (
                <div className="col-md-12">
                  <p style={{ padding: "20px" }}>Həkim tapılmadı</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
