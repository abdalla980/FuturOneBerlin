import styles from './AboutUs.module.css';

export const Aboutus = () => {
    return (
        <div>
        <div className={styles.AboutUs}>
            <h1>What is the workshop about?</h1>
            <p>
                In this two day workshop,participants take part in guided conversations and creative activities, The goal
                is to explore new ideas and work together across different fields. The shared flights and ideas from the
                workshop will help create a practical toolkit. This toolkit is desgined to support ongoing teamwork and
                encorage new innovative actions.
            </p>
        </div>
    <div className={styles.ourPurpose}>
        <h1>Our purpose</h1>
        <p>
            We make sure you leave inspired carrying fresh ideas,
            strengthended by valubale connections ,and equipped with practical,
            actionalbe tools that empower meaningful collaboration to grow and last
            well beyond the event.
        </p>
        <div className={styles.circlesdiv}>
            <img className={styles.Circles} src={"Circles.png"}/>
        </div>
            <div className={styles.roistuff}>
            <h3>ROI</h3>
            <h3>Return of Relations</h3>
            <h3>ROR</h3>

        </div>
    </div>
        </div>


)
}
