import './ProductCard.css';

export function ProductCard({ product, cart, setCart }) {
	
    function handleClick() {
		setCart([...cart, product]);
	}

	return (
		<div className="product-card">
			<h2>{product.title}</h2>
			<img src={product.image} />
			<p>{product.desc}</p>
			<button>{product.price}</button>
			<button onClick={() => handleClick()}>
				{cart.find((item) => item.title == product.title)
					? 'added'
					: 'add to cart'}
			</button>
		</div>
	);
}
