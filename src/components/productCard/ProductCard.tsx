import { IProduct } from '../../types/product.types'
import {FC} from 'react'
import MyButton from '../../UI/myButton/MyButton';
import StarIcon from '../../../images/icons/star.svg';
import './productCard.scss';
interface IProductCardProps {
	product: IProduct
}
const ProductCard: FC<IProductCardProps> = ({product}) => {
	return ( 
		<div className="product-card">
			<img src={product.image} alt="" />
			<h3>{product.title}</h3>
			<p>{product.category}</p>
			<p>{product.rating.rate}<img src={StarIcon} alt="" />/{product.rating.count}</p>
			<h2>{product.price + ' $'}</h2>
			<MyButton onClick={() => console.log('aa')}>To cart</MyButton>
		</div>
	 );
}
 
export default ProductCard;