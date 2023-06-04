import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any; // comodin que nos permite añadir cualquier parametro o propiedad adicional
}

export const MyCheckbox = ({ label, ...props }: Props) => {
    
    const [field] = useField({...props, type:'checkbox'}); // Hace falta indicar el type checkbox para este tipo de elemento y por ello desestructuramos las props

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                { label }
            </label>
            <ErrorMessage name={ props.name } component={"span"} className="custom-span-error-class"/> {/* className="custom-span-error-class" viene por defecto */}
        </>
    )
}
