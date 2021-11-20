import { AUTH_SUCCESS, AUTH_ERROR, CLEAR_ERRORS, USER_LOADED, LOGOUT } from '../types';

export default function AuthReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case AUTH_SUCCESS:
			localStorage.setItem('token', payload.token);
			return { ...state, token: payload.token, error: null };

		case AUTH_ERROR:
			localStorage.removeItem('token');
			return { ...state, token: null, isAuth: false, error: payload.msg };

		case LOGOUT:
			localStorage.removeItem('token');
			return { ...state, token: null, isAuth: false, error: null };

		case CLEAR_ERRORS:
			return { ...state, error: null };

		case USER_LOADED:
			return { ...state, user: payload, isAuth: true };

		default:
			return state;
	}
}
