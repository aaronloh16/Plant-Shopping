import { Link } from "react-router-dom"
import barbell from "../../public/barbell.png"  
export function Home() {
    return (
        <>
            <h1>Welcome to Gym Supplements Store</h1>
            <img src={barbell} />
            <Link to="/Product">
                <button>View Products</button>
            </Link>

        </>
    )
}