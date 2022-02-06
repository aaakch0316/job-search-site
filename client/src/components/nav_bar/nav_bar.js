import styles from './nav_bar.module.css';
import react from 'react';


const NavBar = ({ Link }) => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li>
                    <div className={styles.main_div}>Redirect Test</div>
                    <ul>
                        <li><Link className={styles.sub_div} to="/">Home</Link></li>
                        <li><Link className={styles.sub_div} to="/recruit">Recruit</Link></li>
                        <li><div className={styles.sub_div}>메인 1-3</div></li>
                    </ul>
                </li>
                <li>
                    <div className={styles.main_div}>메인 2</div>
                    <ul>
                        <li><div className={styles.sub_div}>메인 2-1</div></li>
                        <li><div className={styles.sub_div}>메인 2-2</div></li>
                    </ul>
                </li>
                <li>
                    <div className={styles.main_div}>메인 3</div>
                </li>
                <li>
                    <div className={styles.main_div}>메인 4</div>
                    <ul>
                        <li><div className={styles.sub_div}>메인 4-1</div></li>
                        <li><div className={styles.sub_div}>메인 4-1</div></li>
                        <li><div className={styles.sub_div}>메인 4-1</div></li>
                        <li><div className={styles.sub_div}>메인 4-1</div></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;