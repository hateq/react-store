import './setCountry.scss'
import {useState} from 'react'
import LocationIcon from '../../../images/icons/location.svg'
import { useUserCountry } from '../../hooks/useUserCountry'
import { useGetCountriesListQuery } from '../../store/api/api'
import SetCountryModal from '../setcountrymodal/SetCountryModal'

const SetCountry = () => {
	const [isOpen, setIsOpen] = useState(false)
	const {userCountry} = useUserCountry()
	const {data} = useGetCountriesListQuery(null)
	const userCountryFlag = data?.find((country: any) => country.name.common == userCountry.country)?.flags.svg
	const onSetCountryClick = () => {
		setIsOpen(true)
	}
	return ( 
		<>
		<div onClick={onSetCountryClick} className="set-country">
		<img src={LocationIcon} alt="" />
		<div className="user-country">
			<p>Deliver to</p>
			<h2>{userCountry.country}</h2>
		</div>
		</div>
		<SetCountryModal isOpen={isOpen} setIsOpen={setIsOpen} userCountry={userCountry} userCountryFlag={userCountryFlag} data={data}/>
		</>
	 );
}
 
export default SetCountry;