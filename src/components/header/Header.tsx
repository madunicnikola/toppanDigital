import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <h1>
                    <span className={styles.headerLogoFirstWord}>King's</span>
                    <span className={styles.headerLogoSecondWord}>Hobby</span>
                </h1>
            </div>
            <nav className={styles.headerNav}>
                <a href="/">Store</a>
                <a href="/">Events</a>
                <a href="/">Services</a>
                <a href="/">Resources</a>
                <a href="/">Blog</a>
                <a href="/">News</a>
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
            </nav>
            <div className={styles.headerIcons}>
               <img src='/icons/searchIconW.png' alt='Search' className={styles.icon}/>
               <img src='/icons/cartIconW.png' alt='Store' className={styles.icon}/>
               <img src='/icons/userIconW.png' alt='Profile' className={styles.icon}/>
            </div>
        </div>
    );
};

export default Header;