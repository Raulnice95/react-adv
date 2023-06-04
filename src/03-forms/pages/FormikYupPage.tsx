import { useFormik } from 'formik'
import * as Yup from "yup";

import '../styles/styles.css'

export const FormikYupPage = () => {

    // Las validaciones las hacemos con Yup, que tiene un monton ya creadas

    // Desestructurando de formik podemos obtener multiples metodos y propiedades
    // Para que relaciones el values del HTML element de forma automatica debe de coincidir el name con el del initialValues del useFormik
    // Touched para que solo se dispare la validacion cuando se toque en cada input
    // OnBlur es el evento que gestiona la seleccion de inputs
    // getFieldProp permite desestructurar las propiedades y metodos internos sin llamarlos. Asignar el onChange, onBlur etc, 
    //    solo llamando a la propiedad que queremos atacar
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            email:'',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, "Debe de tener 15 caracteres o menos")
                            .required("Requerido"),
            lastName: Yup.string()
                            .max(15, "Debe de tener 15 caracteres o menos")
                            .required("Requerido"),
            email: Yup.string()
                            .email("Direccion de email no tiene un formato valido")
                            .required("Requerido"),
        })
    });

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps("firstName")} />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps("lastName")} />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email" {...getFieldProps("email")} />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
