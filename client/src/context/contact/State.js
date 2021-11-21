import { useReducer } from 'react';

import ContactReducer from './Reducer';
import ContactContext from './Context';
import axios from '../../config/axios';
import {
	ADD_CONTACT,
	UPDATE_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_FILTER,
	CLEAR_FILTER,
	CONTACT_ERROR,
	GET_CONTACTS,
	CLEAR_CONTACTS,
	CONTACT_LOADING,
} from '../types';

export default function ContactState(props) {
	const initialState = {
		contacts: null,
		filtered: null,
		current: null,
		loading: false,
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	const getContacts = async () => {
		try {
			dispatch({ type: CONTACT_LOADING });

			const res = await axios.get('/api/contacts');

			dispatch({ type: GET_CONTACTS, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response });
		}
	};

	const addContact = async contact => {
		try {
			dispatch({ type: CONTACT_LOADING });

			const res = await axios.post('/api/contacts', contact);

			dispatch({ type: ADD_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response });
		}
	};
	const updateContact = async contact => {
		try {
			dispatch({ type: CONTACT_LOADING });

			const res = await axios.put(`/api/contacts/${contact._id}`, contact);

			dispatch({ type: UPDATE_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response });
		}
	};

	const deleteContact = async id => {
		try {
			dispatch({ type: CONTACT_LOADING });

			await axios.delete(`/api/contacts/${id}`);

			dispatch({ type: DELETE_CONTACT, payload: id });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response });
		}
	};

	const setCurrent = contact => dispatch({ type: SET_CURRENT, payload: contact });

	const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

	const clearContaxt = () => dispatch({ type: CLEAR_CONTACTS });

	const setFilter = text => dispatch({ type: SET_FILTER, payload: text });

	const clearFilter = () => dispatch({ type: CLEAR_FILTER });

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				loading: state.loading,
				addContact,
				updateContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				setFilter,
				clearFilter,
				getContacts,
				clearContaxt,
			}}>
			{props.children}
		</ContactContext.Provider>
	);
}
