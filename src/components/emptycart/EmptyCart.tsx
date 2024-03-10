import MyButton from '../../UI/myButton/MyButton'
import './emptyCart.scss'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
	return (
		<div className='empty-cart'>
			<h2>Your cart is empty</h2>
			<p>But you can fix it, go to main page and buy many great products</p>
			<Link to='/react-store/'>
				<MyButton
					onClick={() => {
						return
					}}
				>
					Start shopping
				</MyButton>
			</Link>
		</div>
	)
}

export default EmptyCart
