import './productsList.scss'
import {FC} from 'react'
import ProductCard from '../productCard/ProductCard';
import { IProduct } from '../../types/product.types'
interface IProductsListProps {
	products: IProduct[]
}
const ProductsList: FC<IProductsListProps> = ({products}) => {
	return ( 
		<div className="products-list">
			{products?.map((product) => <ProductCard key={product.id} product={product}/>)}
		</div>
	 );
}
 
export default ProductsList;