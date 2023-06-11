import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; // comodin que nos permite añadir cualquier parametro o propiedad adicional
}

export const MyTextInput = ({ label, ...props }: Props) => {
    // useField es un hook que nos permite extraer de las props del contexto
    const [field] = useField(props); // En la parte de field es donde vienbe el onChange, onBlur, etc.

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className ="text-input" {...field} {...props} />
            <ErrorMessage name={ props.name } component={"span"}className="custom-span-error-class"/>
        </>
    )
}
