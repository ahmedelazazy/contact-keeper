import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar bg-primary">
			<h1>Contact Keeper</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</div>
	);
}
