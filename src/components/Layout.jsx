import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import './Layout.css'

export function Layout({cart}) {
    return (
        <>
            <Navbar cart={cart}/>
            <main className="content">
                <Outlet />
            </main>
        </>
    )
}