import "./style.css"

export default function Card (props) {

        if(`${props.estado}` === "Disponível") {
            return(
                <div className="card">
                <div className="disponivel">
                <p>{props.lab}</p>
                <p>{props.estado}</p>
                </div>
                </div>
        )} else if (`${props.estado}` === "Acesso Livre") {
            return (
                <div className="card">
                <div className="acesso-livre">
                <p>{props.lab}</p>
                <p>{props.estado}</p>
                </div>
                </div>
        )} else if (`${props.estado}` === "Manutenção") {
            return (
                <div className="card">
                <div className="manuntencao">
                <p>{props.lab}</p>
                <p>{props.estado}</p>
                </div>
                </div>
        )} else if (`${props.estado}` === "Em aula") {
            return (
                <div className="card">
                    <div className="em-aula">
                        <p>{props.lab}</p>
                        <p>{props.estado}</p>
                    </div>
                    <div className="titulo">
                        <p>{props.titulo}</p>
                        <p className="prof">{props.professor}</p>
                    </div>
                    <div className="horario">
                        <p>{props.inicio}</p>
                        <p>-</p>
                        <p>{props.fim}</p>
                    </div>
                </div>
            )
        }
    }