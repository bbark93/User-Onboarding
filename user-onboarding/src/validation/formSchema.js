import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be at least 3 characters!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required'),
    password: yup
        .string()
        .required('Pawwsord is required')
        .min(6, 'Password must be at least 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept terms of conditions')
})

export default formSchema;