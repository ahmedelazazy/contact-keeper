import { useReducer } from 'react';
import axios, { setAuthToken } from '../../config/axios';
import AuthReducer from './Reducer';
import AuthContext from './Context';
import { AUTH_SUCCESS, AUTH_ERROR, CLEAR_ERRORS, USER_LOADED, LOGOUT, AUTH_LOADING } from '../types';

export default function AuthState(props) {
	const initialState = {
		token: null,
		user: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const register = async user => {
		try {
			const res = await axios.post('api/users', user);
			dispatch({ type: AUTH_SUCCESS, payload: res.data });
			loadUser();
		} catch (err) {
			console.error(err);
			dispatch({ type: AUTH_ERROR, payload: err.response.data });
		}
	};

	const login = async user => {
		try {
			const res = await axios.post('api/auth', user);
			dispatch({ type: AUTH_SUCCESS, payload: res.data });
			loadUser();
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.response.data.errors?.[0] || err.response.data });
		}
	};

	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	const logout = () => {
		dispatch({ type: LOGOUT });
	};

	const loadUser = async () => {
		try {
			setAuthToken(localStorage.getItem('token'));

			const res = await axios.get('api/auth');

			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (err) {
			console.error(err);
			dispatch({ type: AUTH_ERROR, payload: err.response.data });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				user: state.user,
				isAuth: state.isAuth,
				error: state.error,
				loading: state.loading,
				register,
				clearErrors,
				loadUser,
				login,
				logout,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
}
