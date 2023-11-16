import { Route, Routes } from 'react-router-dom'
import CartPage from './cartpage/CartPage'
import ErrorPage from './errorpage/ErrorPage'
import MainPage from './mainpage/MainPage'
import AccountPage from './accountpage/AccountPage'

const Pages = () => {
	return (
		<Routes>
			<Route path='/react-store/' element={<MainPage />}/>
			<Route path='/react-store/cart' element={<CartPage/>}/>
			<Route path='/react-store/account' element={<AccountPage/>}/>
			<Route path='*' element={<ErrorPage/>}/>
		</Routes>
	)
}

export default Pages
