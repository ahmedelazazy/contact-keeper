import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/Context';
import ContactContext from '../../context/contact/Context';

export default function Navbar() {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
	const { isAuth, logout, user } = authContext;
	const { clearContaxt } = contactContext;

	const onLogout = () => {
		logout();
		clearContaxt();
	};

	return (
		<div className="navbar bg-primary">
			<h1>Contact Keeper</h1>
			<ul>
				{isAuth && (
					<Fragment>
						{user?.name && <li>Welcome back, {user?.name}</li>}
						<li>
							<a onClick={onLogout} to="#!">
								Logout
							</a>
						</li>
					</Fragment>
				)}

				{!isAuth && (
					<Fragment>
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</Fragment>
				)}
			</ul>
		</div>
	);
}
