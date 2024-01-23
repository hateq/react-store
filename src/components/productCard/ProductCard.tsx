import { IProduct } from '../../types/product.types'
import {FC, Dispatch, SetStateAction} from 'react'
import MyButton from '../../UI/myButton/MyButton';
import StarIcon from '../../../images/icons/star.svg';
import { useActions } from '../../hooks/useActions';
import { useCart } from '../../hooks/useCart';
import './productCard.scss';
interface IProductCardProps {
	product: IProduct
	setIsOpen: Dispatch<SetStateAction<boolean>>
	setProduct: Dispatch<SetStateAction<null | IProduct>>
}
const ProductCard: FC<IProductCardProps> = ({product, setIsOpen, setProduct}) => {
	const onProductClick = () => {
		setIsOpen(true)
		setProduct(product)
	}
	const {toggleCart} = useActions();
	const {cart} = useCart();
	return ( 
		<div className="product-card">
			<img onClick={onProductClick} src={product.image} alt="" />
			<h3 onClick={onProductClick}>{product.title}</h3>
			<p>{product.category}</p>
			<p>{product.rating.rate}<img src={StarIcon} alt="" />/<span>{product.rating.count}</span></p>
			<h2>{product.price + ' $'}</h2>
			<MyButton onClick={() => toggleCart(product!)}>{cart.find((item) => item.title == product?.title) ? 'In cart' : 'To cart'} </MyButton>
		</div>
	 );
}
 
export default ProductCard;