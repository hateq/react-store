import './userCart.scss';
import {Link} from 'react-router-dom';
import CartIcon from '../../../images/icons/cart.svg';
import { useCart } from '../../hooks/useCart'

const UserCart = () => {
	const {cart} = useCart()
	return ( 
		<Link to='/react-store/cart'>
		<div className="user-cart">
				<img src={CartIcon} alt="" className="cart-img" />
				<h2 className="cart-counter">{cart.length}</h2>
		</div>
			</Link>
	 );
}
 
export default UserCart;