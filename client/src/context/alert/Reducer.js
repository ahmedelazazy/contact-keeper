import { SET_ALERT, REMOVE_ALERT } from '../types';

export default function AlertReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_ALERT:
			return { ...state, alerts: [...state.alerts, payload] };

		case REMOVE_ALERT:
			return { ...state, alerts: state.alerts.filter(alert => alert.id !== payload) };

		default:
			return state;
	}
}
