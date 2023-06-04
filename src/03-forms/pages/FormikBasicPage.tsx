import { FormikErrors, useFormik } from 'formik'

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ( {firstName, lastName, email}: FormValues ) => {

        const errors: FormikErrors<FormValues> = {};

        if( !firstName ){
            errors.firstName = 'Required';
        } else if ( firstName.length >= 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if( !lastName ){
            errors.lastName = 'Required';
        } else if ( lastName.length >= 10){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    // Desestructurando de formik podemos obtener multiples metodos y propiedades
    // Para que relaciones el values del HTML element de forma automatica debe de coincidir el name con el del initialValues del useFormik
    // Touched para que solo se dispare la validacion cuando se toque en cada input
    // OnBlur es el evento que gestiona la seleccion de inputs
    const {values, handleChange, handleSubmit, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            email:'',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    name="firstName"
                    onBlur={ handleBlur}
                    onChange={ handleChange }
                    value={ values.firstName }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    onChange={ handleChange }
                    value={ values.lastName }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email Address</label>
                <input 
                    type="email"
                    name="email"
                    onChange={ handleChange }
                    value={ values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
