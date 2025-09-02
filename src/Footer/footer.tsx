import styles from './footer.module.css';


export const Footer = () => {
    const goTosocials = () => {
        window.open("https://www.instagram.com/futurone_berlin?igsh=MXVjdjdiMGNkMHQ0Mg%3D%3D&utm_source=qr", "_blank");
    }
    const GotoKimberlyLinkedin = () => {
        window.open("https://www.linkedin.com/in/kimberly-mareen-richter-6a1a92369/", "_blank");
    }
    const GotoEmails = () => {
        window.open("futurone.berlin@gmail.com", "_blank");
    }
    return (
        <div className={styles.main}>
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
                <div className={styles.images}>
                    <img onClick={GotoEmails} className={styles.emailIcon} src={"email.png"}/>
                    <img onClick={goTosocials} src={"instagram.png"}/>
                    <img onClick={GotoKimberlyLinkedin} src={"linkedin.png"}/>

                </div>

            </div>
        </div>
        </div>
    )

}

