import './startMainPage.scss'
import DemonIcon from '../../../images/icons/demon.svg'
import AboutCompany from '../aboutcompany/AboutCompany'

const StartMainPage = () => {
	return ( 
		<div className="start-main-page">
			<div className="start-main-page__text">
				<h2>Start writing and see more than 200 products</h2>
				<img src={DemonIcon} alt="" />
			</div>
			<AboutCompany/>
		</div>
	 );
}
 
export default StartMainPage;