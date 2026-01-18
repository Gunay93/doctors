
import styles from './Blogs.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import 'swiper/css';
import { blogsMock } from '../../../data/blogs';
import BlogCard from '../../blogs/BlogCard';
function Blogs() {
    return (
        <div className={styles.blogs}>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <h4>Faydalı Məlumatlar</h4>
                    </div>
                    <div className="col-md-6 text-end">
                        <div className="custom-prev2">
                            <FaArrowLeft />
                        </div>

                        <div className="custom-next2">
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
                                prevEl: ".custom-prev2",
                                nextEl: ".custom-next2",
                            }}
                            spaceBetween={10}
                            slidesPerView={4}
                        >
                            {blogsMock.map(item => (
                                <SwiperSlide key={item.id}><BlogCard data={item} /></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Blogs;
