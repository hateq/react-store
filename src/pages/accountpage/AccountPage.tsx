import './accountPage.scss'
import { useIsLogedIn } from '../../hooks/useIsLogedIn'
import LogedIn from '../../components/islogedin/LogedIn'
import NotLogedIn from '../../components/notlogedin/NotLogedIn'

const AccountPage = () => {
	const { isLogedIn } = useIsLogedIn().isLogedIn
	return <>
	{isLogedIn ? <LogedIn/> :
	<NotLogedIn/>
	}
	</>
}

export default AccountPage
