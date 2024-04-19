import './logedIn.scss'
import { useUserAccount } from '../../hooks/useUserAccount'
import { useUserCountry } from '../../hooks/useUserCountry'
import { useGetCountriesListQuery } from '../../store/api/api'
import { useActions } from '../../hooks/useActions'
import { Link } from 'react-router-dom'
import MyModal from '../../UI/myModal/MyModal'
import { useState } from 'react'

const LogedIn = () => {
	const {userAccount} = useUserAccount()
	const {userCountry} = useUserCountry()
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [userName, setUserName] = useState<string>(userAccount.userName || '')
	const [userSurname, setUserSurname] = useState<string>(userAccount.userSurname || '')
	const {data} = useGetCountriesListQuery(null)
	const {setIsLogedIn, setUserAccount} = useActions()
	const userCountryFlag = data?.find((country: any) => country.name.common == userCountry.country)?.flags.svg
	const onSaveButtonClick = () => {
		setIsOpen(false);
		setUserAccount({userName : userName, userSurname: userSurname, userLogin: userAccount.userLogin || '', userPassword: userAccount.userPassword || ''})
		document.querySelector('body')?.classList.remove('disable-scroll')
	}
	return <div className='logedin'>
		<h2>{userAccount.userName} {userAccount.userSurname} <img src={userCountryFlag} alt="" /></h2>
		<div className="logedin-buttons">
			<button onClick={() => setIsLogedIn()}>Log out</button>
			<button onClick={() => setIsOpen(true)}>Edit</button>
		</div>
		<Link to={'/react-store/cart'}>
			<button className='cart-button'>Go to my cart</button>
		</Link>
		<MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
			<div className="modal-inputs">
				<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
				<input type="text" value={userSurname} onChange={(e) => setUserSurname(e.target.value)} />
				<button className='save-button' onClick={onSaveButtonClick}>Save</button>
			</div>
		</MyModal>
	</div>
}

export default LogedIn;
