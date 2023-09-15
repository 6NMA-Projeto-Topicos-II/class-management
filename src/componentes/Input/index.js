export default function Input (props) {
    return (<input
    className="input"
        form={props.form}
        id={props.id}
        type={props.type} 
        placeholder={props.placeholder} 
        checked={props.checked} 
        maxLength={props.maxlength}
        minLength={props.minLength}
        name={props.name}
        pattern={props.pattern}
        required={props.required}
        src={props.src}
        alt={props.alt}
        accept={props.accept}
        value={props.value}
        list={props.list}>
            {props.children}
    </input>
    )
}