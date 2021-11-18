import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/Context';

export default function ContactForm() {
	const contactContext = useContext(ContactContext);

	const { addContact, updateContact, current, clearCurrent } = contactContext;

	const defaultValues = {
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	};

	const [contact, setContact] = useState(defaultValues);

	const { name, email, phone, type } = contact;

	useEffect(() => {
		if (current) {
			setContact(current);
		} else {
			setContact(defaultValues);
		}
	}, [current]);

	const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (current) {
			updateContact(contact);
		} else {
			addContact(contact);
		}
		setContact(defaultValues);
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-left">{current ? 'Edit Contact' : 'Add Contact'}</h2>
			<input type="text" name="name" placeholder="Name..." value={name} onChange={onChange} />
			<input type="email" name="email" placeholder="Email..." value={email} onChange={onChange} />
			<input type="text" name="phone" placeholder="Phone..." value={phone} onChange={onChange} />
			<h5>Contact Type</h5>
			<input type="radio" name="type" value="personal" onChange={onChange} checked={type === 'personal'} /> Personal{' '}
			<input type="radio" name="type" value="professional" onChange={onChange} checked={type === 'professional'} />
			Professional
			<div>
				<input type="submit" className="btn btn-primary btn-block" value={current ? 'Update Contact' : 'Save Contact'} />
			</div>
			{current && (
				<div>
					<button type="button" className="btn btn-primary btn-block bg-light" onClick={clearCurrent}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
}
