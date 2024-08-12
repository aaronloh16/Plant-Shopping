export function CartCard({ product, cart, setCart }) {
    
    function handleClick() {
        setCart(cart.filter((item) => item.title !== product.title));
    }

    return (
        <div className="cart-card">
            <h2>{product.title}</h2>
            <img src={product.image} />
            <p>{product.desc}</p>
            <button>{product.price}</button>
            <button onClick={() => handleClick()}>remove</button>
        </div>
    );
}

<div key={index}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<p>{item.price}</p>
                        
						<button onClick={() => handleClick(item)}>Remove Item</button>
					</div>