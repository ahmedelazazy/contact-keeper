import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	UPDATE_CONTACT,
	SET_FILTER,
	CLEAR_FILTER,
	CONTACT_ERROR,
	GET_CONTACTS,
	CLEAR_CONTACTS,
	CLEAR_CURRENT,
	CONTACT_LOADING,
} from '../types';

export default function ContactReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_CONTACT:
			return { ...state, loading: false, contacts: [payload, ...state.contacts] };

		case UPDATE_CONTACT:
			return { ...state, loading: false, contacts: state.contacts.map(contact => (contact._id === payload._id ? payload : contact)) };

		case DELETE_CONTACT:
			return { ...state, loading: false, contacts: state.contacts.filter(contact => contact._id !== payload) };

		case GET_CONTACTS:
			return { ...state, loading: false, contacts: payload };

		case SET_CURRENT:
			return { ...state, loading: false, current: payload };

		case CLEAR_CURRENT:
			return { ...state, loading: false, current: null };

		case CONTACT_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
			};

		case CLEAR_CONTACTS:
			return {
				...state,
				contacts: null,
				error: null,
				filtered: null,
				current: null,
				loading: false,
			};

		case SET_FILTER:
			return {
				...state,
				loading: false,
				filtered: state.contacts.filter(({ name }) => name.match(new RegExp(payload, 'gi'))),
			};

		case CLEAR_FILTER:
			return { ...state, filtered: null };

		case CONTACT_LOADING:
			return { ...state, loading: true };

		default:
			return state;
	}
}
