import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import AlertReducer from './Reducer';
import AlertContext from './Context';
import { SET_ALERT, REMOVE_ALERT } from '../types';

export default function AlertState(props) {
	const initialState = {
		alerts: [],
	};

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	const setAlert = ({ type, message }, timeout = 3000) => {
		const id = uuid();
		dispatch({ type: SET_ALERT, payload: { type, message, id } });

		setTimeout(() => {
			dispatch({ type: REMOVE_ALERT, payload: id });
		}, timeout);
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state.alerts,
				setAlert,
			}}>
			{props.children}
		</AlertContext.Provider>
	);
}
