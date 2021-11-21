import React from 'react';
import ContactForm from '../components/contacts/ContactForm';
import Contacts from '../components/contacts/Contacts';

export default function Home() {
	return (
		<div className="grid-2">
			<ContactForm />
			<div>
				<Contacts />
			</div>
		</div>
	);
}
