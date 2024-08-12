import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Cart({ cart, setCart }) {
    const [total, setTotal] = useState(0);

    // Function to remove an item from the cart
    function handleClick(item) {
        setCart(cart.filter((product) => product.title !== item.title));
    }

    // Calculate total whenever the cart changes
    useEffect(() => {
        const calculatedTotal = cart.reduce((sum, item) => {
            const itemPrice = parseFloat(item.price.replace('$', ''));
            return sum + itemPrice;
        }, 0);

        setTotal(calculatedTotal);
    }, [cart]);

    return (
        <>
            <h1>Cart</h1>
            <button><Link to="/Product">Continue Shopping</Link></button>
            <h3>Cart Total: ${total.toFixed(2)}</h3>
            
            {cart.map((item, index) => {
                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }} 
                        />
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <p>{item.price}</p>
                            <div>
                                <button>-</button>
                                <span>1</span> {/* Always showing quantity as 1 for now */}
                                <button>+</button>
                            </div>
                            <button onClick={() => handleClick(item)}>Remove Item</button>
                        </div>

                        
                    </div>

                    
                    
                );
            })}
            <br />
            <br />
            <button>Checkout (coming soon)</button>
        </>
    );
}
