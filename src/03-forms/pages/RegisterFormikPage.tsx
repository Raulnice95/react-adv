import { Formik,   Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit ={ (values) => {
                    console.log(values)
                }}
                validationSchema = {Yup.object({
                    name: Yup.string()
                                    .min(2, "Debe de tener 2 caracteres como mínimo")
                                    .max(15, "Debe de tener 15 caracteres como máximo")
                                    .required("Requerido"),
                    email: Yup.string()
                                    .email("Direccion de email no tiene un formato valido")
                                    .required("Requerido"),
                    password1: Yup.string()
                                    .min(6, "Debe de tener 6 caracteres como mínimo")
                                    .required("Requerido"),
                    password2: Yup.string()
                                    .min(6, "Debe de tener 6 caracteres como mínimo")
                                    .oneOf([Yup.ref('password1')], 'Las contraseñas deben de coincidir')
                                    .required("Requerido"),
                })}
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput 
                                label="Nombre"
                                name="name"
                                placeholder='Raul'
                            />

                            <MyTextInput 
                                label="Email"
                                name="email"
                                type='email'
                                placeholder='Raul@hotmail.com'
                            />

                            <MyTextInput 
                                label="Password"
                                name="password1"
                                type='password'
                                placeholder='********'
                            />

                            <MyTextInput 
                                label="Repeat password"
                                name="password2"
                                type='password'
                                placeholder='********'
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
