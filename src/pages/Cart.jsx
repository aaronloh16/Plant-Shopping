


export function Cart({cart, setCart}) {
    
    function handleClick(item) {
        setCart(cart.filter((product) => product.title !== item.title))

    }
    
    return (
        <>
            {cart.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p>${item.price}</p>
                        <button onClick={() => handleClick(item)}>remove item</button>

                    </div>
                )
            })}
        </>
    )
}