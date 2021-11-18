import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/Context';

export default function Login() {
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert({ message: 'All fields are required', type: 'danger' });
		} else {
			console.log(user);
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" placeholder="Email..." value={email} onChange={onChange} />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" placeholder="Password..." value={password} onChange={onChange} />
				</div>

				<input type="submit" value="Login" className="btn btn-primary btn-block" />
			</form>
		</div>
	);
}
