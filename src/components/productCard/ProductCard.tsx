import { IProduct } from '../../types/product.types'
import {FC, Dispatch, SetStateAction} from 'react'
import StarIcon from '../../../images/icons/star.svg';
import './productCard.scss';
import MyProductButton from '../../UI/myProductButton/MyProductButton'

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
	return ( 
		<div className="product-card">
			<img onClick={onProductClick} src={product.image} alt="" />
			<h3 onClick={onProductClick}>{product.title}</h3>
			<p>{product.category}</p>
			<p>{product.rating.rate}<img src={StarIcon} alt="" />/<span>{product.rating.count}</span></p>
			<h2>{product.price + ' $'}</h2>
			<MyProductButton product={product}/>
		</div>
	 );
}
 
export default ProductCard;