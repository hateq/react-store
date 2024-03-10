import { IProductCart } from '../../types/product.types'
import './orderCartList.scss'
import { FC } from 'react'
import MyButton from '../../UI/myButton/MyButton'

interface IOrderCartListProps {
	cart: IProductCart[]
}
const OrderCartList: FC<IOrderCartListProps> = ({ cart }) => {
	let cartPrice = 0
	for (let i = 0; i < cart.length; i++) {
		cartPrice = cartPrice + cart[i].price * cart[i].quantity
	}
	return (
		<div className='order-cart-list'>
			<div className='product-order-wrapper'>
				{cart.map(product => {
					return (
						<div key={product.id} className='product-order'>
							<img src={product.image} alt='' />
							<h2>{product.title}</h2>
							<p>{product.quantity}</p>
							<h3>{(product.price * product.quantity).toFixed(1)} $</h3>
						</div>
					)
				})}
			</div>
			<div className='order-cart-bottom'>
				<h2 className='order-cart-title'>{cartPrice.toFixed(1)} $</h2>
				<MyButton
					onClick={() => {
						return
					}}
				>
					Order
				</MyButton>
			</div>
		</div>
	)
}

export default OrderCartList
