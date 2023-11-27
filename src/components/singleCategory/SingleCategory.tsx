import './singleCategory.scss'
import {FC, Dispatch, SetStateAction} from 'react'
import NextIcon from '../../../images/icons/next.svg'
import {Link} from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

interface SingleCategoryProps {
	categoryName: string
	categoryId: number
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
const SingleCategory: FC<SingleCategoryProps> = ({categoryName, categoryId, setIsOpen}) => {
	const {setSelectedCategory} = useActions()
	const onCategoryClick = () => {
		setIsOpen(false)
		setSelectedCategory({id:categoryId, name: categoryName})
	}
	return ( 
		<Link className='single-category__link' to='/react-store/single-category'>
			<div onClick={onCategoryClick} className="single-category">
				<h2>{categoryName}</h2>
			<div className="img-wrapper"><img src={NextIcon} alt="" /></div>
			</div>
		</Link>
	 );
}
 
export default SingleCategory;