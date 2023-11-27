import { Route, Routes } from 'react-router-dom'
import AccountPage from './accountpage/AccountPage'
import CartPage from './cartpage/CartPage'
import ErrorPage from './errorpage/ErrorPage'
import MainPage from './mainpage/MainPage'
import SingleCategoryPage from './singlecategorypage/SingleCategoryPage'

const Pages = () => {
	return (
		<Routes>
			<Route path='/react-store/' element={<MainPage />} />
			<Route path='/react-store/cart' element={<CartPage />} />
			<Route path='/react-store/account' element={<AccountPage />} />
			<Route
				path='/react-store/single-category'
				element={<SingleCategoryPage />}
			/>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}

export default Pages
