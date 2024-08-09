import { Link } from "react-router-dom";
export function About() {
    return (
        <div>
            <h1>About us</h1>
            <p>We are an online gym supplement store giving you quality products</p>
            <Link to="/Contact">
                <button>Contact us</button>
            </Link>
        </div>
    )
}