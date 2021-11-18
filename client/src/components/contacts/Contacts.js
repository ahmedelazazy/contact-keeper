import React, { Fragment, useContext, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../context/contact/Context';
import ContactFilter from './ContactFilter';
import ContactItem from './ContactItem';

export default function Contacts() {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered } = contactContext;

	const [displayedContacts, setDisplayedContacts] = useState(filtered || contacts);

	useEffect(() => {
		setDisplayedContacts(filtered || contacts);
	}, [contacts, filtered]);

	if (contacts.length === 0) {
		return <h4>Please add some contacts...</h4>;
	}

	return (
		<Fragment>
			<ContactFilter />
			<TransitionGroup>
				{displayedContacts.map(contact => (
					<CSSTransition key={contact.id} timeout={200} classNames="item">
						<ContactItem contact={contact} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</Fragment>
	);
}
