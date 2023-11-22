import { useTheme } from '../../hooks/useTheme'
import './themeToggler.scss'
import LightIcon from '../../../images/icons/light-theme.svg'
import DarkIcon from '../../../images/icons/dark-theme.svg'

const ThemeToggler = () => {
	const {theme, setTheme} = useTheme()
	const handleLightTheme = () => {
		setTheme('light')
	}
	const handleDarkTheme = () => {
		setTheme('dark')
	}
	return ( 
		<div className="theme-toggler">
			{theme == 'dark' ?
			<img onClick={handleLightTheme} src={DarkIcon} alt="" /> :
			<img onClick={handleDarkTheme} src={LightIcon} alt="" />
		}
		</div>
	 );
}
 
export default ThemeToggler;