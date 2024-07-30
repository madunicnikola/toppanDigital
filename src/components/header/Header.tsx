import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    function toggleMenu() {
      setMenuOpen(!menuOpen);
      const headerLinks = document.getElementById("header-list");
      const headerBody = document.getElementById("header-body");
  
      if (headerLinks && headerBody) {
        if (menuOpen) {
          headerLinks.style.right = "-100%";
          headerBody.classList.remove("overflow-hidden");
          document.documentElement.classList.remove("overflow-hidden");
        } else {
          headerLinks.style.right = "0";
          headerBody.classList.add("overflow-hidden");
          document.documentElement.classList.add("overflow-hidden");
        }
      }
    }
    return (
        <div className={styles.headerBody} id='header-body'>
            <div className={styles.headerLogo}>
                <h1>
                    <span className={styles.headerLogoFirstWord}>King's</span>
                    <span className={styles.headerLogoSecondWord}>Hobby</span>
                </h1>
            </div>
            <div className={styles.headerList} id='header-list'>
                    <ul className={styles.headerMainList}>
                        <a href='/'>Store</a>
                        <a href='/'>Events</a>
                        <a href='/'>Services</a>
                        <a href='/'>Resources</a>
                        <a href='/'>Blog</a>
                        <a href='/'>News</a>
                        <a href='/'>About Us</a>
                        <a href='/'>Contact Us</a>
                    </ul>
                    <div className={styles.menuFooter}>
                        <div className={styles.menuFooterContactInfo}>
                        <hr className={styles.menuFooterLine} />
                    </div>
                    </div>
                    <div className={styles.menuFooterIcons}>
                        <img src='/icons/header/searchIconW.png' alt='Search' className={styles.icon}/>
                        <img src='/icons/header/cartIconW.png' alt='Store' className={styles.icon}/>
                        <img src='/icons/header/userIconW.png' alt='Profile' className={styles.icon}/>
                    </div>
                </div>
            <div className={styles.headerIcons}>
                <img src='/icons/header/searchIconW.png' alt='Search' className={styles.icon}/>
                <img src='/icons/header/cartIconW.png' alt='Store' className={styles.icon}/>
                <img src='/icons/header/userIconW.png' alt='Profile' className={styles.icon}/>
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
            {menuOpen ? (
                <svg key="close-icon" className="icon" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L31 31M1 31L31 1" stroke="white" strokeLinecap="square"></path>
                </svg>
            ) : (
                <svg key="menu-icon" className="icon" width={32} height={10} viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H31M31 9H11" stroke="white" strokeLinecap="square"></path>
                </svg>
            )}
        </div>
        </div>
    );
};

export default Header;