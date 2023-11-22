import './setCountry.scss'
import {useState, useRef} from 'react'
import MyModal from '../../UI/myModal/MyModal'
import LocationIcon from '../../../images/icons/location.svg'
import { useUserCountry } from '../../hooks/useUserCountry'
import MyButton from '../../UI/myButton/MyButton'
import AsyncSelect from 'react-select/async'
import { ISelectedOption } from '../../types/select.types'
import { useGetCountriesListQuery } from '../../store/api/api'
import { useActions } from '../../hooks/useActions'

const SetCountry = () => {
	const imgRef = useRef<HTMLImageElement>(null)
	const [isOpen, setIsOpen] = useState(false)
	const {userCountry} = useUserCountry()
	const [selectedCountry, setSelectedCountry] = useState<string>(userCountry.country)
	const {data} = useGetCountriesListQuery(null)
	const {setUserCountry} = useActions()
	const handleChange = (selectedOption: ISelectedOption | null) => {
		if (selectedOption) {
		setSelectedCountry(selectedOption.value)
		}
	}
	const filteredCountries = data?.filter((country: any) => Number(country.population) >= 30000000).map((country: any) => {return {value:country.name.common, label: <><img src={country.flags.svg} alt="" /><h2>{country.name.common}</h2></>}
	})
	const loadOptions = (searchValue: string | number, callback: any) => {
			const currentCountries = filteredCountries?.filter((country: any) => country.value.toLowerCase().includes(typeof searchValue == 'string' ? searchValue.toLowerCase() : searchValue))
		callback(currentCountries)
	}
	const onButtonClick = () => {
		setUserCountry(selectedCountry)
		setIsOpen(false)
	}
	const userCountryFlag = data?.find((country: any) => country.name.common == userCountry.country)?.flags.svg
	const defaultOption = {value: userCountry.country, label: <><img ref={imgRef} src={userCountryFlag} alt="" /><h2>{userCountry.country}</h2></>}
	const onSetCountryClick = () => {
		setIsOpen(true)
		imgRef.current?.setAttribute('src', userCountryFlag)
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
		<MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
			 <div className="country-modal-wrapper">
				<div className="modal-top">
					<h2>Choose your country</h2>
				</div>
				<div className="modal-bottom">
					<div className="select-wrapper">
						<AsyncSelect defaultValue={defaultOption} loadOptions={loadOptions} onChange={handleChange} classNamePrefix='custom-select' placeholder='Choose your country' defaultOptions={filteredCountries}/>
					</div>
					<div className="button-wrapper">
						<MyButton onClick={onButtonClick}>
						<p>Done</p>
						</MyButton>
					</div>
				</div>
			 </div>
		</MyModal>
		</>
	 );
}
 
export default SetCountry;