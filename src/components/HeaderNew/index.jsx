import { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import NavBarNew from "../NavBarNew";
import CartSummary from "../CartSummary";
import { Icon } from "./Icons";
import SetColorMode from "../SetColorMode"
import UserInfo from "../UserInfo"
export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true); // 初始化為透明

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsTransparent(scrollTop >= 550); // 滾動到 500px 時設置為非透明
    };
    return (
        <div >
            <div className={isTransparent ? styles.headercolor : styles.header}>
            {/* <div className="container"> */}
             <NavLink to="/">
                <img className={styles.logo} src="/images/logo.png" alt="logo" />
            </NavLink>
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <NavBarNew open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            <CartSummary />
            <nav className={styles.icon} >
                <UserInfo/>
            </nav>
            <nav className={styles.coloricon} >
                <SetColorMode className={styles.coloricon} size={32} />
            </nav>
            {/* </div> */}
        </div>

        </div>
        

    );
}