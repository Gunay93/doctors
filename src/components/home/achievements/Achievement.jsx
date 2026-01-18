import styles from './Achievements.module.css';
function Achievement({data}) {
    return (
        <div key={data.id} className={`${styles.stat_card} col-md-4`}>
            <img src={data.icon} />
            <div className={styles.stat_descr}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
export default Achievement;