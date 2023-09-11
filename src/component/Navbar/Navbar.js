import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar()
{
    return(
        <>
         <div>
            <nav className="navbar">
                <span>My Website</span>
                <a href='/' >Home</a>
                <a href='/about' >About</a>
                <a href='/contact' >Contact</a>
            </nav>
         </div>
        </>
    )
}