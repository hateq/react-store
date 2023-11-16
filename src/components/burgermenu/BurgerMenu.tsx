import UserMenu from '../usermenu/UserMenu'
import cl from './BurgerMenu.module.scss';
import {useState} from 'react'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return ( 
		<div className={cl.burgerMenu}>
		<h2 onClick={() => setIsOpen(!isOpen)}>hh</h2>
		<UserMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
		</div>
	 );
}
 
export default BurgerMenu;