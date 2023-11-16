import ReactDom from 'react-dom'
import './userMenu.scss'
import {FC, Dispatch, SetStateAction} from 'react'

interface UserMenuProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
const menuPortal = document.getElementById('menu-portal')!;
const UserMenu: FC<UserMenuProps> = ({isOpen, setIsOpen}) => ReactDom.createPortal(
	<div className={`user-menu ${isOpen ? '' : 'user-menu__closed'}`}>
		<h2 onClick={() => setIsOpen(!isOpen)}>close</h2>
	</div>,
	menuPortal
)
 
export default UserMenu;