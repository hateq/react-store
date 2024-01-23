import './productsList.scss'
import {FC, Dispatch, SetStateAction} from 'react'
import ProductCard from '../productCard/ProductCard';
import { IProduct } from '../../types/product.types'
interface IProductsListProps {
	products: IProduct[]
	setIsOpen: Dispatch<SetStateAction<boolean>>
	setProduct: Dispatch<SetStateAction<null | IProduct>>
}
const ProductsList: FC<IProductsListProps> = ({products, setIsOpen, setProduct}) => {
	return ( 
		<div className="products-list">
			{products?.map((product) => <ProductCard key={product.id} product={product} setIsOpen={setIsOpen} setProduct={setProduct}/>)}
		</div>
	 );
}
 
export default ProductsList;