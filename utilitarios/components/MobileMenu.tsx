//Imports de Estilo.
import styles from '../styles/MobileIcon.module.css'

//Imports React e Next.
import { useState } from 'react'


//Imports do Projeto.
import ItemsMenu from './ItemsMenu'

export default function nome(props){

    const [isOpen, setIsOpen] = useState(false)
    
    function handleClick(){
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    console.log(isOpen)

    
    function renderMenu(){
        return(
        isOpen == true ? 
            <div className={styles.teste}>
                <ItemsMenu/>
            </div> 

            : null
         )
    }

    return(
        <>
            <nav className={styles.menuMobile} > 
                <img className={styles.menuMobileIcon}  src="menuMobile.png" alt="" onClick={()=>handleClick()}/>
            </nav>
            {renderMenu()}

        </>
    )
}