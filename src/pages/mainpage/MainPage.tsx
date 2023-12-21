import ProductsPage from '../../components/productspage/ProductsPage'
import StartMainPage from '../../components/startmainpage/StartMainPage'
import { useInputValue } from '../../hooks/useInputValue'
import './mainPage.scss'

const MainPage = () => {
	const {inputValue} = useInputValue()
	return ( 
		<>{
			inputValue.value.length !== 0 ?
			<ProductsPage/> :
			<StartMainPage/>
		}
		</>
	 );
}
 
export default MainPage;