import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Home from './pages/Home';
import About from './pages/About';
import ContactState from './context/contact/State';
import AuthState from './context/auth/State';
import AlertState from './context/alert/State';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<Navbar />
						<div className="container">
							<Alerts />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Switch>
						</div>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
}

export default App;
