import cl from './MyLoader.module.css'
import LoadingIcon from '../../../images/icons/loading.svg'

const MyLoader = () => {
	return ( 
		<div className={cl.MyLoader}>
			<img src={LoadingIcon} alt="" />
		</div>
	 );
}

export default MyLoader;