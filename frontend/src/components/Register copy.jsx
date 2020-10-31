import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object({
    firstName: yup.string().min(2, 'First name should be miniumum 2 characters!').required('Required'),
    lastName: yup.string().min(2, 'Last name should be miniumum 2 characters!').required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(2, 'Password should be miniumum 2 characters!').required('Required'),
    gender: yup.mixed().oneOf([ 'male', 'female', 'other' ])
});

const Register = (props) => {
    const [ submitting, setSubmitting ] = useState('false');
    return (
        <div>
            <h1>Register</h1>
            <div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        avatar: '',
                        gender: '',
                        age: ''
                    }}
                    validationSchema={signupSchema}
                    onSubmit={(data) => {
                        setSubmitting(true);
                        // make async call
                        console.log('submit: ', data);
                        setSubmitting(false);
                    }}
                >
                    <form>
                        <Field placeholder="First Name" name="firstName" type="text" value="firstName" />
                        <Field placeholder="Last Name" name="lastName" type="text" value="lastName" />
                        <div>
                            <button disabled={submitting} type="submit" />
                        </div>
                    </form>
                </Formik>
            </div>
        </div>
    );
};

export default Register;
