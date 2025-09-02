import styles from './footer.module.css';


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <h1>Commons of exchange</h1>
                <p>
                    Impressum:<br/>
                    Futur One : Initiative in formation<br/>
                    Workshop „Commons of Exchange“<br/>
                    Contact: futurone.berlin@gmail.com<br/>
                    <br/><br/>
                    @ Futur 1. All rights Reserved
                </p>
            </div>
            <div className={styles.right}>
                <h3>Stay in Contact</h3>
                <div>
                    <img className={styles.emailIcon} src={"email.png"}/>
                    <img src={"instagram.png"}/>
                    <img src={"linkedin.png"}/>

                </div>

            </div>
        </div>

    )

}

