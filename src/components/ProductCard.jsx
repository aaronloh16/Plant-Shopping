

export function ProductCard({product, cart, setCart}) {
    
    function handleClick() {
        setCart([...cart, product])
    }   
    
    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <button>${product.price}</button>
            <button onClick={() => handleClick()}>
                {cart.find((item) => item.title == product.title)? "added" : "add to cart"}</button>
        </>
    )
}