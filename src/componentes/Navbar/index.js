import ItemNavegação from "./ItemNavegação/index"
import Usericon from "../../Assets/do-utilizador.png"
import Logo from "../Logo/index"
import "./style.css"

export default function NavBar() {
    return (
        <header className="header">
            <Logo className="logo-header"/>
            <nav className="navbar">
                <ul className="nav-lista">
                    <ItemNavegação href="/" nome="HOME"/>
                    <ItemNavegação href="/contato" nome="CONTATO"/>
                    <ItemNavegação href="/configurações" nome="CONFIGURAÇÕES"/>
                </ul>
            <img className="icone" src={Usericon} alt=""/>
            </nav>
        </header>
    )
}