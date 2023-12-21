import './setCountryModal.scss'
import MyButton from '../../UI/myButton/MyButton'
import AsyncSelect from 'react-select/async'
import {SelectInstance} from 'react-select'
import MyModal from '../../UI/myModal/MyModal'
import {useState, useEffect, FC, useRef} from 'react'
import { useActions } from '../../hooks/useActions'
import { ISelectedOption } from '../../types/select.types'

interface SetCountryModalProps {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	userCountry: {country: string}
	userCountryFlag: string | undefined
	data: any
}
const SetCountryModal: FC<SetCountryModalProps> = ({isOpen, setIsOpen, userCountry, userCountryFlag, data}) => {
	const imgRef = useRef<HTMLImageElement>(null)
	const selectRef = useRef<SelectInstance>(null)
	useEffect(() => {
		imgRef.current?.setAttribute('src', userCountryFlag!)
		selectRef.current?.selectOption(defaultOption)
	}, [isOpen])
	const {setUserCountry} = useActions()
	const [selectedCountry, setSelectedCountry] = useState<string>(userCountry.country)
	const handleChange = (selectedOption: ISelectedOption | null) => {
		if (selectedOption) {
		setSelectedCountry(selectedOption.value)
		}
	}
	const onModalClick = () => {
		if (!imgRef?.current?.getAttribute('src')) {
			imgRef.current?.setAttribute('src', userCountryFlag!)
		}
	}
	const defaultOption = {value: userCountry.country, label: <><img ref={imgRef} src={userCountryFlag} alt="" /><h2>{userCountry.country}</h2></>}
	const onButtonClick = () => {
		setUserCountry(selectedCountry)
		setIsOpen(false)
		document.querySelector('body')?.classList.remove('disable-scroll')
	}
	const filteredCountries = data?.filter((country: any) => Number(country.population) >= 30000000).map((country: any) => {return {value:country.name.common, label: <><img src={country.flags.svg} alt="" /><h2>{country.name.common}</h2></>}
})
const loadOptions = (searchValue: string | number, callback: any) => {
		const currentCountries = filteredCountries?.filter((country: any) => country.value.toLowerCase().includes(typeof searchValue == 'string' ? searchValue.toLowerCase() : searchValue))
	callback(currentCountries)
}
	return ( 
		<MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
			 <div className="country-modal-wrapper">
				<div onClick={onModalClick} className="modal-top">
					<h2>Choose your country</h2>
				</div>
				<div onClick={onModalClick} className="modal-bottom">
					<div className="select-wrapper">
						<AsyncSelect ref={selectRef} defaultValue={defaultOption} loadOptions={loadOptions} onChange={(selectedOption: any) => handleChange(selectedOption)}classNamePrefix='custom-select' placeholder='Choose your country' defaultOptions={filteredCountries}/>
					</div>
					<div className="button-wrapper">
						<MyButton onClick={onButtonClick}>
						<p>Done</p>
						</MyButton>
					</div>
				</div>
			 </div>
		</MyModal>
	 );
}
 
export default SetCountryModal;