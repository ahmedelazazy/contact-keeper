import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/Context';

export default function ContactFilter() {
	const [text, setText] = useState('');

	const contactContext = useContext(ContactContext);

	const { setFilter, clearFilter } = contactContext;

	useEffect(() => {
		if (text.length > 0) {
			setFilter(text);
		} else {
			clearFilter();
		}
	}, [text]);

	return (
		<form>
			<input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Filter Contacts..." />
		</form>
	);
}
