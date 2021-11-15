import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

export default function Contacts() {
	const contactContext = useContext(ContactContext);

	console.log(contactContext);
	const { contacts } = contactContext;

	return (
		<Fragment>
			{contacts.map((c) => (
				<ContactItem key={c.id} contact={c} />
			))}
		</Fragment>
	);
}
