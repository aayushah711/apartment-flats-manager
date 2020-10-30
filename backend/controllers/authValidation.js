const yup = require('yup');

const signupSchema = yup.object().shape({
    firstName: yup.string().min(2, 'First name should be miniumum 2 characters!').required('Required'),
    lastName: yup.string().min(2, 'Last name should be miniumum 2 characters!').required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(2, 'Password should be miniumum 2 characters!').required('Required'),
    gender: yup.mixed().oneOf([ 'male', 'female', 'other' ])
});

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(2, 'Password should be miniumum 2 characters!').required('Required')
});

module.exports = { signupSchema, loginSchema };
