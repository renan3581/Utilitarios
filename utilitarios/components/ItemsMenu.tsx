import Link from "next/link"

export default function ItemsMenu(props){
    
    const itemsMenu = ['Home', 'Sobre', 'Contato']
    const itemsURL = { item1:'/'+ itemsMenu[0], item2: '/'+ itemsMenu[1], item3: '/'+ itemsMenu[2]}
    
    return(
        <>
            <ul>
                <li><Link href={itemsURL.item1}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL.item2}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL.item3}>{itemsMenu[2]}</Link></li>
                <li><Link href={itemsURL.item1}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL.item2}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL.item3}>{itemsMenu[2]}</Link></li>
                <li><Link href={itemsURL.item1}>{itemsMenu[0]}</Link></li>
                <li><Link href={itemsURL.item2}>{itemsMenu[1]}</Link></li>
                <li><Link href={itemsURL.item3}>{itemsMenu[2]}</Link></li>
            </ul>
        </>
    )
}