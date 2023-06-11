// Formik es un componente porque renderiza un JSX
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from "yup";

import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            {/* Formik nos da ese Context entre sus hijos */}
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
                    (formik) => (
                        
                        /* Al utilizar el onSubmit en el Formik ya no es necesrio aqui */
                        /* El Form lo vamos a meter dentro del Formik como un children */
                        <Form >
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/> {/* En el name le decimos que campo controlar y que tipo es */}
                            <ErrorMessage name="firstName" component={"span"}/> {/* En el name le decimos que campo controlar En CSS tenemos los span en rojo para mostrar error. Por eso definimos que ele errorMessage es un Span */}

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component={"span"}/>

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email" component={"span"}/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT-senior</option>
                                <option value="it-junior">IT-junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component={"span"}/>

                            <label htmlFor="terms">
                                <Field name="terms" type="checkbox"/>
                                Terms & conditions
                            </label>
                            <ErrorMessage name="terms" component={"span"}/>

                            <button type='submit'>Submit</button>

                        </Form>
                    )
                }

            </Formik>

            
        </div>
    )
}
