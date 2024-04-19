import { useTypedSelector } from './useTypedSelector';

export const useUserAccount = () => {
	const userAccount = useTypedSelector(state => state.userAccountSlice)
	return {userAccount}
}