import ItemNavegação from "./ItemNavegação/index"
import Logo from "../Logo/index"
import "./style.css"
import LogoutButton from "./LogoutButton/index.js"

export default function NavBar() {
    return (
        <header className="header">
            <Logo className="logo-header"/>
            <nav className="navbar">
                <ul className="nav-lista">
                    <ItemNavegação href="/logado/home" nome="HOME"/>
                    <ItemNavegação href="/logado/laboratorios" nome="LABORATORIOS"/>
                    <LogoutButton/>
                </ul>
            </nav>
        </header>
    )
}