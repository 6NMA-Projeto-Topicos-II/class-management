import "./style.css"

export default function Card (props) {
    return (
        <div className="card">
            <div className="prof-img">
            <img src={props.img} alt={props.alt}></img>
            <p>{props.prof}</p>
            </div>
            <div className="estado-num">
                <p>{props.num}</p>
                <p>{props.estado}</p>
            </div>
            <div className="titulo">
                <p>{props.titulo}</p>
            </div>
            <div className="horario">
                <p>{props.inicio}</p>
                <p>-</p>
                <p>{props.fim}</p>
            </div>
        </div>
    )
}