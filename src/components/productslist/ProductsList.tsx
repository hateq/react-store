import './productsList.scss'
import {FC, Dispatch, SetStateAction} from 'react'
import ProductCard from '../productCard/ProductCard';
import { IProduct, IProductCart } from '../../types/product.types'
interface IProductsListProps {
	products: IProductCart[]
	setIsOpen: Dispatch<SetStateAction<boolean>>
	setProduct: Dispatch<SetStateAction<null | IProduct | IProductCart>>
	isCart?: true
}
const ProductsList: FC<IProductsListProps> = ({products, setIsOpen, setProduct, isCart}) => {
	return ( 
		<div className="products-list">
			{products?.map((product) => <ProductCard key={product.id} product={product} setIsOpen={setIsOpen} setProduct={setProduct} isCart={isCart || undefined}/>)}
		</div>
	 );
}
 
export default ProductsList;