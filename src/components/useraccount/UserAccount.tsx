import './userAccount.scss'
import AccountIcon from '../../../images/icons/account.svg'
import {Link} from 'react-router-dom'

const UserAccount = () => {
	return ( 
		<Link to='/react-store/account'>
			<div className="user-account">
				<img src={AccountIcon} alt="" />
			</div>
		</Link>
	 );
}
 
export default UserAccount;