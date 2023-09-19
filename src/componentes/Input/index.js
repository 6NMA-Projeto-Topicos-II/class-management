export default function Input (props) {
    return (<input
        className={props.className}
        value={props.value}
        onChange={props.onChange}
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
        list={props.list}>
            {props.children}
    </input>
    )
}