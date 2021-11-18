import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, SET_FILTER, CLEAR_FILTER } from '../types';

export default function ContactReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_CONTACT:
			return { ...state, contacts: [...state.contacts, payload] };

		case UPDATE_CONTACT:
			return { ...state, contacts: state.contacts.map(contact => (contact.id === payload.id ? payload : contact)) };

		case DELETE_CONTACT:
			return { ...state, contacts: state.contacts.filter(contact => contact.id !== payload) };

		case SET_CURRENT:
			return { ...state, current: payload };

		case CLEAR_CURRENT:
			return { ...state, current: null };

		case SET_FILTER:
			return {
				...state,
				filtered: state.contacts.filter(({ name }) => name.match(new RegExp(payload, 'gi'))),
			};

		case CLEAR_FILTER:
			return { ...state, filtered: null };

		default:
			return state;
	}
}