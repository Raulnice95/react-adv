// ESTE COMPONENTE ES EL MAS OPTIMIZADO Y AVANZADO CON FORMIK FORMS
// Formik es un componente porque renderiza un JSX
import { Formik, Form } from 'formik'
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

import '../styles/styles.css'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik 
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    terms: false,
                    jopType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values)
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                    .max(15, "Debe de tener 15 caracteres o menos")
                                    .required("Requerido"),
                    lastName: Yup.string()
                                    .max(15, "Debe de tener 15 caracteres o menos")
                                    .required("Requerido"),
                    email: Yup.string()
                                    .email("Direccion de email no tiene un formato valido")
                                    .required("Requerido"),
                    terms: Yup.boolean()
                                    .oneOf([true]), // Para la validacion que al hacer submit tiene que ser true
                    jobType: Yup.string()
                                    .notOneOf(['it-junior'], "Esta opcion no está permitida") // Para quitar opciones como permitidas
                                    .required('Requerido')
                    })
                }
            >
                {
                    // Dentro de formik podemos desestructurar y hay un monton de propiedades y metodos
                    (formik) => {
                        return (

                            /* Al utilizar el onSubmit en el Formik ya no es necesrio aqui */
                            /* El Form lo vamos a meter dentro del Formik como un children */
                            <Form>

                                <MyTextInput
                                    label="First Name"
                                    name="firstName"
                                    placeholder='Nombre...' />

                                <MyTextInput
                                    label="Last Name"
                                    name="lastName"
                                    placeholder='Apellido...' />

                                <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    placeholder='Email...'
                                    type='email' />

                                <MySelect label="jobType" name='jobType'>
                                    <option value="">Pick something</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="it-senior">IT-senior</option>
                                    <option value="it-junior">IT-junior</option>
                                </MySelect>

                                <MyCheckbox label="Terms & conditions" name="terms"/>

                                <button type='submit'>Submit</button>

                            </Form>
                        );
                    }
                }

            </Formik>

            
        </div>
    )
}
