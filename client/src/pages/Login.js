import React, { useContext, useState, useEffect } from 'react';
import AlertContext from '../context/alert/Context';
import AuthContext from '../context/auth/Context';

export default function Login(props) {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuth } = authContext;

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	useEffect(() => {
		if (error) {
			setAlert({ type: 'danger', message: error });
			clearErrors();
		}
		if (isAuth) {
			props.history.push('/');
		}
	}, [error, isAuth]);

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert({ message: 'All fields are required', type: 'danger' });
		} else {
			login({ email, password });
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
