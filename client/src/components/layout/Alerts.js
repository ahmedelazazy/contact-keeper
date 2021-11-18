import React, { useContext } from 'react';
import AlertContext from '../../context/alert/Context';

export default function Alerts() {
	const alertContext = useContext(AlertContext);
	const { alerts } = alertContext;

	return (
		<div>
			{alerts.map(({ id, type, message }) => (
				<div key={id} className={`alert alert-${type}`}>
					{message}
				</div>
			))}
		</div>
	);
}
