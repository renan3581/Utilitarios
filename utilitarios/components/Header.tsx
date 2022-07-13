import styles from '../styles/Header.module.css'
import MobileMenu from './MobileMenu'
import Login from './Login'
import Logo from './Logo'
export default function Header(props){
    
    return(
        <header className={styles.Header} >
           <MobileMenu/> 
              <Logo/>
              <Login/>
        </header>
    )
}