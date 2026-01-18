
import { doctorsMock } from '../../../data/doctors';
import DoctorCard from '../../doctors/DoctorCard';
import styles from './Doctors.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import 'swiper/css';
function Doctors() {
    return (
        <div className={styles.doctors}>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <h4>Həkimlər</h4>
                    </div>
                    <div className="col-md-6 text-end">
                        <div className="custom-prev">
                            <FaArrowLeft />
                        </div>

                        <div className="custom-next">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: ".custom-prev",
                                nextEl: ".custom-next",
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                        >
                            {doctorsMock.map(item => (
                                <SwiperSlide key={item.id}><DoctorCard data={item} /></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Doctors;
