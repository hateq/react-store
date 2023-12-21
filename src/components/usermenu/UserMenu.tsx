import ReactDom from 'react-dom'
import './userMenu.scss'
import {FC, Dispatch, SetStateAction} from 'react'
import {Link} from 'react-router-dom'
import { MouseEvent } from 'react'
import AccountIcon from '../../../images/icons/account.svg'
import SingleCategory from '../singleCategory/SingleCategory'
import { useUserCountry } from '../../hooks/useUserCountry'
import { useGetCategoriesListQuery, useGetCountriesListQuery } from '../../store/api/api'
import SetCountryModal from '../setcountrymodal/SetCountryModal'
import {useState} from 'react'

interface UserMenuProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const menuPortal = document.getElementById('menu-portal')!;
const UserMenu: FC<UserMenuProps> = ({isOpen, setIsOpen}) => {
	const categoriesList = useGetCategoriesListQuery(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
const {userCountry} = useUserCountry()
const countriesList = useGetCountriesListQuery(null)
if (isOpen) {
	document.querySelector('body')?.classList.add('disable-scroll')
}
const userCountryFlag = countriesList.data?.find((country: any) => country.name.common == userCountry.country)?.flags.svg
const onUserMenuCountryClick = () => {
	setIsModalOpen(true)
}
const onMenuOverflowClick = () => {
	setIsOpen(false)
	document.querySelector('body')?.classList.remove('disable-scroll')
}
const onAccountClick = () => {
	setIsOpen(false)
	document.querySelector('body')?.classList.remove('disable-scroll')
}
return (ReactDom.createPortal(
	<>
	<div onClick={onMenuOverflowClick} className={`user-menu-overflow ${isOpen ? '' : 'user-menu-overflow__closed'}`}>
		<div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className={`user-menu ${isOpen ? '' : 'user-menu__closed'}`}>
		<div className="user-menu__top">
			<Link className='user-menu__account-link' to='/react-store/account'>
				<div onClick={onAccountClick} className="user-menu__account">
					<img src={AccountIcon} alt="" />
					<h2>Go to your account</h2>
				</div>
			</Link>
			<div className="user-menu__categories">
			{categoriesList.data?.map((category: string) => {
				return <SingleCategory setIsOpen={setIsOpen} key={category} category={category} />
			})}
		</div>
		</div>
			<div className="user-menu__info">
				<Link className='account-link' to='/react-store/account'>
					<div onClick={onAccountClick} className="user-menu__info-account">
						<p>Your account</p>
					</div>
				</Link>
				<div onClick={onUserMenuCountryClick} className="user-menu__info-country">
				<img src={userCountryFlag} alt="" />
					<p>{userCountry.country}</p>
				</div>
			</div>
		</div>
	</div>
	<SetCountryModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} userCountry={userCountry} userCountryFlag={userCountryFlag} data={countriesList.data} />
	</>
	,
	menuPortal
))
}
 
export default UserMenu;