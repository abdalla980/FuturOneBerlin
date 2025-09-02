import { useState } from 'react';
import styles from './Homepage.module.css';

export function Homepage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const goToform =()=>{
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSei2h2rRaMTd5Ope7mNAgwTyFSa1A_5KtKFDwAFMIQRiTn6tw/viewform","_blank")
    }

    return (
        <div className={styles.all}>
            <div className={styles.NavBar}>
                {/* Desktop Links */}
                <div className={styles.links}>
                    <a href="#Home"><h3>Home</h3></a>
                    <a href="#AboutUs"><h3>About us</h3></a>
                    <a href="#Ourpurpose"><h3>Our purpose</h3></a>
                    <a href="#Ourteam"><h3>Our team</h3></a>
                </div>

                {/* Hamburger for Mobile */}
                <div
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#Home" onClick={() => setMenuOpen(false)}><h3>Home</h3></a>
                    <a href="#AboutUs" onClick={() => setMenuOpen(false)}><h3>About us</h3></a>
                    <a href="#Ourpurpose" onClick={() => setMenuOpen(false)}><h3>Our purpose</h3></a>
                    <a href="#Ourteam" onClick={() => setMenuOpen(false)}><h3>Our team</h3></a>
                </div>
            )}


            <div id={"Home"} className={styles.Page}>
                <h2 className={styles.JoinUs}>Join us</h2>
                <h2 className={styles.COE}>Commmons of exchange</h2>
                <h2 className={styles.October}>October 2025</h2>

                <p className={styles.subTitle}>
                    Connecting diverse proffesionals to create<br />
                    and collaborate
                </p>
                <button onClick={goToform} className={styles.MainButton}>Register now</button>
            </div>
        </div>
    );
}
