import styles from './Blogs.module.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogCard = ({ data }) => {
    return (
        <div className={`${styles.blog_card}`}>
            <img src={data.image} alt={data.title} />
            <div className={styles.content}>
                <span className={styles.date}>{data.date}</span>
                <h3>{data.title}</h3>
                <Link href="">Ətrafllı<FaArrowRight /></Link>
            </div>
        </div>
    );
};

export default BlogCard;