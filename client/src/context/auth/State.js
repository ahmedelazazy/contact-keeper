import { useReducer } from 'react';
import AuthReducer from './Reducer';
import AuthContext from './Context';
import { LOGIN, REGISTER } from '../types';

export default function AuthState(props) {
	const initialState = {
		token: null,
		user: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				user: state.user,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
}
