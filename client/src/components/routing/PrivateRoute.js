import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../context/auth/Context';
import Spinner from '../layout/Spinner';

export default function PrivateRoute({ component: Component, ...rest }) {
	const { isAuth, loading, loadUser } = useContext(AuthContext);

	useEffect(() => {
		loadUser();
	}, []);

	if (loading) {
		return <Spinner />;
	}

	if (isAuth) {
		return <Route component={Component} {...rest} />;
	} else {
		return <Redirect to="/login" {...rest} />;
	}
}
