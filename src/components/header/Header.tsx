import './header.scss'
import LogoImage from '../../../images/logo.png'
import {Link} from 'react-router-dom'
import UserCart from '../usercart/UserCart'
import BurgerMenu from '../burgermenu/BurgerMenu'
import MyInput from '../../UI/myInput/MyInput'
import UserAccount from '../useraccount/UserAccount'
import SetCountry from '../setcountry/SetCountry'
import ThemeToggler from '../themetoggler/ThemeToggler'
import { useInputValue } from '../../hooks/useInputValue'
import { useActions } from '../../hooks/useActions'
import { ChangeEvent } from 'react'

const Header = () => {
	const {inputValue} = useInputValue()
	const {setInputValue} = useActions()
	return ( 
		<header className='header'>
			<div className="header-top">
		<div className="header-top__left">
			<div className="header-top__left-main">
				<div className="burger-menu-mobile">
				<BurgerMenu/>
				</div>
				<Link to='/react-store/'><img src={LogoImage} alt="" className="logo" /></Link>
				<div className="choose-country"><SetCountry/></div>
			</div>
			<div className="header-top__left-mobile">
				<ThemeToggler/>
				<UserAccount/>
			<UserCart/>
			</div>
		</div>
		<div className="header-top__search-container">
		<MyInput value={inputValue.value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value)
		}}/>
		</div>
		<div className="header-top__right">
			<ThemeToggler/>
			<UserAccount/>
		<UserCart/>
		</div>
			</div>
			<div className="header-bottom">
		<div className="burger-menu">
		<BurgerMenu/>
		</div>
		<div className="choose-country-mobile"><SetCountry/></div>
			</div>
		</header>
	 );
}
 
export default Header;