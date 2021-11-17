import { useReducer } from 'react';
import ContactReducer from './ContactReducer';
import ContactContext from './contactContext';
import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT } from '../types';
import { v4 as uuid } from 'uuid';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Jill Johnson',
				email: 'jill@gmail.com',
				phone: '111-111-1111',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Sara Watson',
				email: 'sara@gmail.com',
				phone: '222-222-2222',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Harry White',
				email: 'harry@gmail.com',
				phone: '333-333-333',
				type: 'professional',
			},
		],
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	const addContact = contact => dispatch({ type: ADD_CONTACT, payload: { id: uuid(), ...contact } });

	const updateContact = contact => dispatch({ type: UPDATE_CONTACT, payload: contact });

	const deleteContact = id => dispatch({ type: DELETE_CONTACT, payload: id });

	const setCurrent = contact => dispatch({ type: SET_CURRENT, payload: contact });

	const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				updateContact,
				deleteContact,
				setCurrent,
				clearCurrent,
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
