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
            fillMode={props.fillMode}
            rounded={props.rounded}
            selected={props.selected}
            toggable={props.toggable}
        >
            {props.value}
        </button>
    )
}