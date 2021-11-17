import React, { Fragment, useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactFilter from './ContactFilter';
import ContactItem from './ContactItem';

export default function Contacts() {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered } = contactContext;

	const [displayedContacts, setDisplayedContacts] = useState(filtered || contacts);

	useEffect(() => {
		setDisplayedContacts(filtered || contacts);
	}, [filtered]);

	if (contacts.length === 0) {
		return <h4>Please add some contacts...</h4>;
	}

	return (
		<Fragment>
			<ContactFilter />

			{displayedContacts.map(c => (
				<ContactItem key={c.id} contact={c} />
			))}
		</Fragment>
	);
}
