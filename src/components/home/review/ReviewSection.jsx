import { reviewsMock } from '../../../data/reviews';
import ReviewCard from '../../review/ReviewCard';
import styles from './ReviewSection.module.css';

function ReviewSection() {
    return (
        <div className={styles.review}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Pasiyent məmnunluğu</h4>
                    </div>
                </div>
                <div className="row">
                    {reviewsMock.slice(0, 3).map(item => (
                        <ReviewCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ReviewSection;
