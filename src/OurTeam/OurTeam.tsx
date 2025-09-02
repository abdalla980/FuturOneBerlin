import styles from './OurTeam.module.css';

export const OurTeam = () => {
    const goTosocials = () => {
        window.open("https://www.instagram.com/futurone_berlin?igsh=MXVjdjdiMGNkMHQ0Mg%3D%3D&utm_source=qr", "_blank");
    }
    const GotoKimberlyLinkedin = () => {
        window.open("https://www.linkedin.com/in/kimberly-mareen-richter-6a1a92369/", "_blank");
    }
    const Gotocarmen = () => {
        window.open("https://carmencaro.com/", "_blank");
    }
    const GotocarmenNGO = () => {
        window.open("https://www.radiojuntanza.com/nosotras-us/", "_blank");
    }

    return (
        <div id="Ourteam" className={styles.OurTeam}>
            <h1 className={styles.Title}>Our Team</h1>

            <h2>Kimberly Mareen</h2>
            <h3>Founder</h3>
            <p>
                Kimberly Mareen has a foundational background in Occupational Therapy, where she developed a
                broad understanding of interdisciplinary care work and empowerment. She has contributed as a facilitator
                at Healer projects dedicated to healing trauma through expressive arts & rituals. Currently, she is pursuing
                a diploma in sculpture with specialization in value-based design processes. Her project Futur One integrates
                creative and social disciplines to cultivate inclusive, sustainable, and transformative community environments.
            </p>
            <div className={styles.buttonsdiv}>
                <button onClick={goTosocials} className={styles.Socialsbtn}>Socials</button>
                <button onClick={GotoKimberlyLinkedin} className={styles.Linkedinbtn}>Linkedin</button>
            </div>

            <h2>Carmen Caro</h2>
            <h3>Co-host</h3>
            <p>
                Carmen Caro is a Colombian interdisciplinary artist and human rights activist who employs art as a tool for research and advocacy.
                Her practice centers on listening as both a political and aesthetic stance, supporting grassroots collectives in Colombia, Guatemala, Palestine, and Europe.
                She leads trainings and contributes to human rights defense through ethical and empathetic community engagement.
            </p>
            <div className={styles.buttonsddiv}>
                <button onClick={Gotocarmen} className={styles.Websitebtn}>Website</button>
                <button onClick={GotocarmenNGO} className={styles.NGObtn}>NGO</button>
            </div>
        </div>
    )
}
