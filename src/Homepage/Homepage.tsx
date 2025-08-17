import styles from './Homepage.module.css'

 export function Homepage() {
    return (
        <div className={styles.all}>

        <div className={styles.NavBar}>
            <h3>Home</h3>
            <h3>About us</h3>
            <h3>Our purpose</h3>
            <h3>Our team</h3>
        </div>


     <div className={styles.Page}>
                <h2 className={styles.JoinUs}>Join us</h2>
                <h2 className={styles.COE}>Commmons of exchange</h2>
                <h2 className={styles.October}>October 2025</h2>

                <p className={styles.subTitle}>Connecting diverse proffesionals to create<br/>and collaborate</p>
                <button className={styles.MainButton}>Register now</button>
     </div>
        </div>


    )
 }