import styles from './Ourapproach.module.css';

export const Ourapproach = () => {
    return (
        <div>
            <div className={styles.Ourapproach}>
            <h1 className={styles.header}>Our Approach</h1>
            <img className={styles.approachImage} src={"OurApproachImage.jpg"}/>
                <p className={styles.ourapproachtext}>
                    We prioritize thoughtful processes
                    that encourage deeper understanding foster a collaborative spirit,
                    and nurture meaningful connections for lasting network
                </p>
            </div>
        </div>
    )
}
