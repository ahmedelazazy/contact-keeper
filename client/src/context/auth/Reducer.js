import { AUTH_SUCCESS, AUTH_ERROR, CLEAR_ERRORS, USER_LOADED, LOGOUT, AUTH_LOADING } from '../types';

export default function AuthReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case AUTH_SUCCESS:
			localStorage.setItem('token', payload.token);
			return { ...state, token: payload.token, error: null, loading: false };

		case AUTH_ERROR:
			localStorage.removeItem('token');
			return { ...state, token: null, isAuth: false, error: payload.msg, loading: false };

		case LOGOUT:
			localStorage.removeItem('token');
			return { ...state, token: null, isAuth: false, error: null, loading: false };

		case CLEAR_ERRORS:
			return { ...state, error: null, loading: false };

		case USER_LOADED:
			return { ...state, user: payload, isAuth: true, loading: false };

		default:
			return state;
	}
}
