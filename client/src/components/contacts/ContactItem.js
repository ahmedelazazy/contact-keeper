import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

export default function ContactItem({ contact }) {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent } = contactContext;

	const { id, name, type, phone, email } = contact;

	const onDelete = () => {
		deleteContact(id);
	};

	return (
		<div className="card bg-light">
			<h3 className="text-left">
				{name}
				<span className={`badge badge-${type === 'professional' ? 'success' : 'primary'}`} style={{ textTransform: 'capitalize', float: 'right' }}>
					{type}
				</span>
			</h3>

			<ul className="list">
				{phone && <li>Phone: {phone}</li>}
				{email && <li>Email: {email}</li>}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>
					Edit
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					Delete
				</button>
			</p>
		</div>
	);
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};
