
import { ProductCard } from "../components/ProductCard"

export function Product({cart, setCart}) {
    
    const protein = {title: "Protein Powder", desc: "Whey protein powder", price: 49.99}
    const creatine = {title: "Creatine", desc: "Creatine monohydrate", price: 29.99}
    const massGainer = {title: "Mass Gainer", desc: "Mass gainer protein powder", price: 59.99}
    
    const products = [protein, creatine, massGainer]    

    return (
        <>
            {products.map((product, index) => {
                return(
                    <div key={index}>
 
                        <ProductCard product={product} cart={cart} setCart={setCart} />
                    
                    </div>
                )
            
            })}
        </>
    )
}



