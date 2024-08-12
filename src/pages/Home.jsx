import { Link } from 'react-router-dom';
import plant from '../../public/image.png';
export function Home() {
	return (
		<>
			<div style={{ paddingTop: '40px' }}>
				<h1>Welcome to Paradise Nursery</h1>
				<h2>Where Green Meets Serenity</h2>
                <p> We offer a wide variety of plants that will help you create a serene environment in your home. <br /><br />Pleae take a look at all we have to offer and contact us if you need any assistance!</p>
                   
				<img src={plant} />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Link to="/Product">
						<button style={{ backgroundColor: 'teal' }}> Get Started</button>
					</Link>
				</div>
			</div>
		</>
	);
}
