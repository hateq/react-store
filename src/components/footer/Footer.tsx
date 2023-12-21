import './footer.scss'
import {Link} from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useUserCountry } from '../../hooks/useUserCountry'
import { useGetCategoriesListQuery, useGetCountriesListQuery } from '../../store/api/api'
import SetCountryModal from '../setcountrymodal/SetCountryModal'
import {useState} from 'react'

const Footer = () => {
	const categoriesList = useGetCategoriesListQuery(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const {setSelectedCategory} = useActions()
	const {userCountry} = useUserCountry()
	const {data} = useGetCountriesListQuery(null)
	const userCountryFlag = data?.find((country: any) => country.name.common == userCountry.country)?.flags.svg
	const onUserCountryClick = () => {
		setIsOpen(true)
	}
	return ( 
		<footer className='footer'>
			<div className="footer-top">
			<div className="footer-top__categories">
			<h2>Categories</h2>
			<div className="footer-top__list">
				{categoriesList.data?.map((category: string) => {
					return <Link key={category} onClick={() => setSelectedCategory(category)} to='/react-store/single-category'>{category}</Link>
				})}
			</div>
			</div>
			<div className="footer-top__links">
				<h2>Links</h2>
				<div className="footer-top__list">
				<a target='_blank' href="https://github.com/hateq">Github</a>
				<a target='_blank' href="https://t.me/hateql">Telegram</a>
				<a target='_blank' href="https://www.linkedin.com/in/vadim-konyukhov-a958b9283/">LinkedIn</a>
				<a target='_blank' href="https://vk.com/cvrsdxdx">VK</a>
				</div>
			</div>
			</div>
			<div className="footer-bottom">
				<div onClick={onUserCountryClick} className="footer-bottom__country">
					<img src={userCountryFlag} alt="" />
					<p>{userCountry.country}</p>
				</div>
				<Link to='/react-store/account'>Your account</Link>
			</div>
			<SetCountryModal isOpen={isOpen} setIsOpen={setIsOpen} userCountry={userCountry} userCountryFlag={userCountryFlag} data={data}/>
		</footer>
	 );
}
 
export default Footer;