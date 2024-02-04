import { IProduct } from '../../types/product.types'
import './selectedProductCard.scss'
import {FC} from 'react'
import StarIcon from '../../../images/icons/star.svg';
import MyProductButton from '../../UI/myProductButton/MyProductButton'

interface ISelectedProductCardProps {
	product: null | IProduct
}
const SelectedProductCard: FC<ISelectedProductCardProps> = ({product}) => {
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
			<MyProductButton product={product}/>
		</div>
	 );
}
 
export default SelectedProductCard;