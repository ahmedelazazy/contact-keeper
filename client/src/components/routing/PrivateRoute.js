import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../context/auth/Context';

export default function PrivateRoute({ component: Component, ...rest }) {
	const { isAuth } = useContext(AuthContext);

	if (isAuth) {
		return <Route component={Component} {...rest} />;
	} else {
		return <Redirect to="/login" {...rest} />;
	}
}
