import './cartpage.scss'
import { useCart } from '../../hooks/useCart'
import EmptyCart from '../../components/emptycart/EmptyCart'
import ProductsList from '../../components/productslist/ProductsList'
import MyModal from '../../UI/myModal/MyModal'
import SelectedProductCard from '../../components/selectedproductcard/SelectedProductCard'
import { useState } from 'react'
import { IProductCart } from '../../types/product.types'
import { IProduct } from '../../types/product.types'
import { useIsLogedIn } from '../../hooks/useIsLogedIn'
import MyButton from '../../UI/myButton/MyButton'
import { Link } from 'react-router-dom'
import OrderCartList from '../../components/ordercartlist/OrderCartList'

const CartPage = () => {
	const { isLogedIn } = useIsLogedIn()
	const { cart } = useCart()
	const [isProductOpen, setIsProductOpen] = useState<boolean>(false)
	const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false)
	const [selectedProduct, setSelectedProduct] = useState<
		null | IProduct | IProductCart
	>(null)
	let cartPrice = 0
	for (let i = 0; i < cart.length; i++) {
		cartPrice = cartPrice + cart[i].price * cart[i].quantity
	}
	return (
		<>
			{cart.length == 0 ? (
				<EmptyCart />
			) : (
				<>
					<h2 className='cart-title'>Your cart</h2>
					<ProductsList
						products={cart}
						setIsOpen={setIsProductOpen}
						setProduct={setSelectedProduct}
						isCart={true}
					/>
					<div className='order-products'>
						<button onClick={() => setIsOrderOpen(true)}>Order products</button>
						<h2>{cartPrice.toFixed(1)} $</h2>
					</div>
				</>
			)}
			<MyModal isOpen={isProductOpen} setIsOpen={setIsProductOpen}>
				<SelectedProductCard product={selectedProduct} />
			</MyModal>
			<MyModal isOpen={isOrderOpen} setIsOpen={setIsOrderOpen}>
				{!isLogedIn.isLogedIn ? 
				<div className="not-logedin">
				<h2>You have not log in</h2>
				<Link to='/react-store/account'>
					<MyButton onClick={() => {return}}>
						To account page
					</MyButton>
				</Link>
				</div>
				: 
				<OrderCartList cart={cart}/>
				}
			</MyModal>
		</>
	)
}

export default CartPage
