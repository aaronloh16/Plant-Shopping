import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar({ cart }) {
	const totalItems = cart.length;

	return (
		<div className="navbar">
			<Link to="/" className="navbutton">
				{' '}
				<button>Home</button>
			</Link>
			<Link to="/Product" className="navbutton">
				{' '}
				<button>Product</button>
			</Link>
			<Link to="/About" className="navbutton">
				{' '}
				<button>About</button>
			</Link>
			<Link to="/Cart" className="navbutton">
				{' '}
				<button>Cart ({totalItems})</button>
			</Link>
		</div>
	);
}
