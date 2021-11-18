import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/Context';

export default function Register() {
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert({ message: 'All fields are required', type: 'danger' });
		} else if (password !== password2) {
			setAlert({ message: "Confirm password doesn't match the password", type: 'danger' });
		} else {
			console.log(user);
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" placeholder="Name..." value={name} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" placeholder="Email..." value={email} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" placeholder="Password..." value={password} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password2">Confirm Password:</label>
					<input type="password" name="password2" placeholder="Password..." value={password2} onChange={onChange} />
				</div>

				<input type="submit" value="Register" className="btn btn-primary btn-block" />
			</form>
		</div>
	);
}
