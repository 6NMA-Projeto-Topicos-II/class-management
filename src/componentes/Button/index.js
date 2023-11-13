export default function Button (props) {
    return (
        <button
            id={props.id}
            form={props.form}
            aria-label={props.label}
            name={props.name}
            type={props.type}
            onClick={props.onClick}
            className={props.className}
            style={props.stye}
            disabled={props.disabled}
            fillmode={props.fillmode}
            rounded={props.rounded}
            selected={props.selected}
            toggable={props.toggable}
        >
            {props.children}
        </button>
    )
}