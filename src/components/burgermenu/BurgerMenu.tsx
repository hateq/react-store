import UserMenu from '../usermenu/UserMenu'
import cl from './BurgerMenu.module.scss';
import {useState} from 'react'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return ( 
		<>
		<div onClick={() => setIsOpen(true)} className={cl.burgerMenu}>
		<div className={cl.burgerWrapper}><span></span><span></span><span></span></div>
		<h2>All</h2>
		</div>
		<UserMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
		</>
	 );
}
 
export default BurgerMenu;