import './header.scss'
import LogoImage from '../../../images/logo.png'
import {Link} from 'react-router-dom'
import UserCart from '../usercart/UserCart'
import BurgerMenu from '../burgermenu/BurgerMenu'
import MyInput from '../../UI/myInput/MyInput'
import UserAccount from '../useraccount/UserAccount'
import SetCountry from '../setcountry/SetCountry'

const Header = () => {
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
				<UserAccount/>
			<UserCart/>
			</div>
		</div>
		<div className="header-top__search-container">
		<MyInput/>
		</div>
		<div className="header-top__right">
			<UserAccount/>
		<UserCart/>
		</div>
		<div className="header-top__mobile-container"></div>
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