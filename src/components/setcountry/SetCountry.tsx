import './setCountry.scss'
import {useState} from 'react'
import MyModal from '../../UI/myModal/MyModal'
import LocationIcon from '../../../images/icons/location.svg'

const SetCountry = () => {
	const [isOpen, setIsOpen] = useState(false)
	return ( 
		<>
		<div onClick={() => setIsOpen(true)} className="set-country">
		<img src={LocationIcon} alt="" />
		<div className="user-country">
			<p>Deliver to</p>
			<h2>Japan</h2>
		</div>
		</div>
		<MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
			country
		</MyModal>
		</>
	 );
}
 
export default SetCountry;