import * as Yup from 'yup';

let schemaRegister = Yup.object().shape({
  email: Yup.string()
    .required('please enter a valid email')
    .email('please add  email'),
  password: Yup.string().required('please add a password').min(5),
  name: Yup.string().required('please enter your name').min(2),
});

let schemaLogin = Yup.object().shape({
  email: Yup.string()
    .required('please enter a valid email')
    .email('please add  email'),
  password: Yup.string().required('please add a password').min(5),
});

let schemaPost = Yup.object().shape({
  images: Yup.array().required().min(1, 'please add at least one image'),
  title: Yup.string().required('please add a title').min(5),
  price: Yup.number().required('please add a price').min(3).max(10000),
  description: Yup.string().required('please add a description'),
});

export { schemaRegister, schemaLogin, schemaPost };
