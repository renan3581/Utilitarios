//Imports de Estilo.
import styles from "../styles/MobileMenu.module.scss"

//Imports React e Next.
import { useState } from 'react'


//Imports do Projeto.
import ItemsMenu from './ItemsMenu'

export default function nome(props){
    
    const [isOpen, setIsOpen] = useState(false)

    const stateChange = () => {
        isOpen? setIsOpen(false) : setIsOpen(true)
     }
    
    function menuOpen(){
        return(  
            <nav className={styles.Menu}>
                {isOpen?
                <>
                    <div className={styles.MenuBackground}>
                        <div className={styles.MenuOpenIcon} >
                            <div className={styles.IconBackground} onClick={()=>stateChange()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>

                        <div className={styles.MenuContent}>
                            <ItemsMenu />
                            
                        </div>
                    </div>

                 </>
                :  
                <>    
                    <div className={styles.IconBackground} onClick={()=>stateChange()}> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={()=>stateChange}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                    </div>

                </>
                }
            </nav>

        ) 
    }


    //Renderização do componente.
    return(
        <>
            {menuOpen()} 
        </>
    )
}