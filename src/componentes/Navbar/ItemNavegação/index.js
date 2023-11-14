import "./style.css"

export default function ItemNavegação(props) {
    return (
        <li>
            <a href={props.href} className="link-nav">
                {props.nome}
            </a>
        </li>
    )
}