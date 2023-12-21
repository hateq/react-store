import './singleCategory.scss'
import {FC, Dispatch, SetStateAction} from 'react'
import NextIcon from '../../../images/icons/next.svg'
import {Link} from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

interface SingleCategoryProps {
	category: string
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
const SingleCategory: FC<SingleCategoryProps> = ({category, setIsOpen}) => {
	const {setSelectedCategory} = useActions()
	const onCategoryClick = () => {
		setIsOpen(false)
		setSelectedCategory(category)
		document.querySelector('body')?.classList.remove('disable-scroll')
	}
	return ( 
		<Link className='single-category__link' to='/react-store/single-category'>
			<div onClick={onCategoryClick} className="single-category">
				<h2>{category}</h2>
			<div className="img-wrapper"><img src={NextIcon} alt="" /></div>
			</div>
		</Link>
	 );
}
 
export default SingleCategory;