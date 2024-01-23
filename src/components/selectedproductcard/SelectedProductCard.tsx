import { IProduct } from '../../types/product.types'
import './selectedProductCard.scss'
import {FC} from 'react'
import StarIcon from '../../../images/icons/star.svg';
import { useActions } from '../../hooks/useActions';
import { useCart } from '../../hooks/useCart';
interface ISelectedProductCardProps {
	product: null | IProduct
}
const SelectedProductCard: FC<ISelectedProductCardProps> = ({product}) => {
	const {toggleCart} = useActions();
	const {cart} = useCart();
	return ( 
		<div className="selected-product-card">
			<img src={product?.image} alt="" />
			<h2>{product?.title}</h2>
			<p>{product?.description}</p>
			<div className="selected-product-card__inner">
				<p>{product?.category}</p>
				<p>{product?.rating.rate}<img src={StarIcon} alt="" />/<span>{product?.rating.count}</span></p>
			</div>
			<h3>{product?.price} $</h3>
			<button onClick={() => toggleCart(product!)}>{cart.find((item) => item.title == product?.title) ? 'In cart' : 'To cart'}</button>
		</div>
	 );
}
 
export default SelectedProductCard;