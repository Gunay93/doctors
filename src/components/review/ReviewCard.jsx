import { FaQuoteRight } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import styles from './Review.module.css';
const ReviewCard = ({ data }) => {
    return (
        <div className='col-md-4'>
            <div className={styles.reviw_card}>
                <div className={styles.quote}><FaQuoteRight /></div>
                <img src={data.avatar} alt={data.title} />
                <div className={styles.content}>
                    <h5>{data.name}</h5>
                    <div className={styles.star_rating}>
                        {[...Array(5)].map((_, i) => (
                            <IoIosStar
                                key={i}
                                size={24}
                                color={i < data.rating ? "#0095DA" : "#ccc"}
                            />
                        ))}
                    </div>
                    <p>{data.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;