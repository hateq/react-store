import {Route, Routes} from 'react-router-dom'
import MainPage from './mainpage/MainPage'

const Pages = () => {
	return ( 
		<Routes>
			<Route path='/react-store/' element={<MainPage/>}/>
		</Routes>
	 );
}
 
export default Pages;