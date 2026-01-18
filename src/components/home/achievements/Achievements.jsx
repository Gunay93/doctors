import { statsMock } from "../../../data/achievements";
import Achievement from "./Achievement";
import styles from './Achievements.module.css';
function Achievements() {
    return (
        <div className={styles.achievements}>
            <div className="container">
                <div className="row">
                    {statsMock.map(item => (
                        <Achievement key={item.id} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Achievements;
