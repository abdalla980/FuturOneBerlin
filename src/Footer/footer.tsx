import styles from './footer.module.css';


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <h1>Commons of exchange</h1>
                <p>
                    A creative social lab focused on inclusive, sustainable
                    community collaboration through art and innovation.
                    <br/><br/>
                    @ Futur 1. All rights Reserved
                </p>
            </div>
            <div className={styles.right}>
                <h3>Stay Connected!</h3>

            </div>
        </div>
    )
}
