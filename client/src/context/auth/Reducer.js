import { LOGIN, REGISTER } from '../types';

export default function AuthReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN:
		// return { ...state, contacts: [...state.contacts, payload] };

		case REGISTER:
		// return { ...state, contacts: state.contacts.map(contact => (contact.id === payload.id ? payload : contact)) };

		default:
			return state;
	}
}
