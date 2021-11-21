import React, { Fragment, useContext, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../context/contact/Context';
import ContactFilter from './ContactFilter';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

export default function Contacts() {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered, getContacts, loading } = contactContext;

	const [displayedContacts, setDisplayedContacts] = useState(filtered || contacts);

	useEffect(() => {
		getContacts();
	}, []);

	useEffect(() => {
		setDisplayedContacts(filtered || contacts);
	}, [contacts, filtered]);

	if (!loading && (!displayedContacts || displayedContacts.length === 0)) {
		return <h4>Please add some contacts...</h4>;
	}

	return (
		<Fragment>
			<ContactFilter />

			{loading && <Spinner />}

			{!loading && (
				<TransitionGroup>
					{displayedContacts.map(contact => (
						<CSSTransition key={contact._id} timeout={200} classNames="item">
							<ContactItem contact={contact} />
						</CSSTransition>
					))}
				</TransitionGroup>
			)}
		</Fragment>
	);
}
