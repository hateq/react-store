import { useTypedSelector } from './useTypedSelector';

export const useUserCountry = () => {
	const userCountry = useTypedSelector(state => state.userCountry)
	return {userCountry}
}