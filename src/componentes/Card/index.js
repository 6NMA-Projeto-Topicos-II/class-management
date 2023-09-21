import "./style.css"

export default function Card (inicio, fim, titulo, lab, estado, ativo = false) {

    return (
        <div className={ativo ? "composto" : "simples"}>
            <div className="estado-num">
                <p>{lab}</p>
                <p>{estado}</p>
            </div>
            <div className="titulo">
                <p>{titulo}</p>
            </div>
            <div className="horario">
                <p>{inicio}</p>
                <p>-</p>
                <p>{fim}</p>
            </div>
        </div>
    )
}