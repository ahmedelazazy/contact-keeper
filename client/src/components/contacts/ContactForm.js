import React, { useContext, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

export default function ContactForm() {
	const contactContext = useContext(ContactContext);

	const defaultValues = {
		name: "",
		email: "",
		phone: "",
		type: "personal",
	};
	const [contact, setContact] = useState(defaultValues);

	const { name, email, phone, type } = contact;

	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		contactContext.addContact(contact);
		setContact(defaultValues);
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" name="name" placeholder="Name..." value={name} onChange={onChange} />
			<input type="email" name="email" placeholder="Email..." value={email} onChange={onChange} />
			<input type="text" name="phone" placeholder="Phone..." value={phone} onChange={onChange} />
			<h5>Contact Type</h5>
			<input type="radio" name="type" value="personal" onChange={onChange} checked={type === "personal"} />
			Personal <input type="radio" name="type" value="professional" onChange={onChange} checked={type === "professional"} />
			Professional
			<div>
				<input type="submit" className="btn btn-primary btn-block" value="Add Contact" />
			</div>
		</form>
	);
}
