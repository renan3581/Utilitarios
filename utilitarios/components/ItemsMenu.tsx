import Link from "next/link"

export default function nome(props){
    
    const itemsMenu = ['Home', 'Sobre', 'Contato']
    const itemsURL = [ '/'+ itemsMenu[0], '/'+ itemsMenu[1], '/'+ itemsMenu[2]]
    
    return(
        <>
            <ul>
                <li><Link href={itemsURL[0]}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL[1]}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL[2]}>{itemsMenu[2]}</Link></li>
                <li><Link href={itemsURL[0]}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL[1]}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL[2]}>{itemsMenu[2]}</Link></li>
                <li><Link href={itemsURL[0]}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL[1]}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL[2]}>{itemsMenu[2]}</Link></li>
                <li><Link href={itemsURL[0]}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL[1]}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL[2]}>{itemsMenu[2]}</Link></li>
            </ul>
        </>
    )
}