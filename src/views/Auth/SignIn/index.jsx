import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../../components/FormElements/Buttons';
import {
  InputPassword,
  NormalInput,
} from '../../../components/FormElements/Inputs';
import {
  AuthForm,
  AuthHeader,
  AuthWrapper,
  Text,
} from '../style';
import loginBg from '../../../assets/images/login-bg.png';
import { setToken } from '../../../redux/modules/auth/actions';
import { useShowModal } from '../../../hooks/modal';
import Modal from '../Modal';
import auth from '../../../services/auth';

export default () => {
  const dispatch = useDispatch();
  const { showBlured } = useShowModal();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().required('Login field is required'),
      password: Yup.string().required('Password field is required'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      let formData = new FormData(); //formdata object

      formData.append('_username', values.login); //append the values with key, value pair
      formData.append('_password', values.password);
      formData.append('_subdomain', 'face');
      auth
        .getToken(formData)
        .then((resp) => {
          console.log(resp.data);
          dispatch(setToken(resp.data.token));
        })
        .catch(() => {
          showBlured({
            title: 'Sign In',
            maxWidth: '448px',
            body: () => (
              <Modal message='The selected login or password is invalid.' />
            ),
          });
        });
    },
  });

  return (
    <AuthWrapper>
      <AuthWrapper.Left>
        <AuthHeader>
          <Text
            className={classNames(
              'heading-5',
              'weight-medium',
              'text-black-800'
            )}
          >
            Sign In to your workspace
          </Text>
        </AuthHeader>
        <AuthForm onSubmit={formik.handleSubmit}>
          <NormalInput
            white
            size='large'
            placeholder='Login'
            type={formik.touched.login && formik.errors.login && 'error'}
            helperText={
              formik.touched.email && formik.errors.login && formik.errors.login
            }
            value={formik.values.login}
            onChange={(e) => formik.setFieldValue('login', e.target.value)}
          />
          <InputPassword
            eye
            white
            size='large'
            placeholder='Password'
            value={formik.values.password}
            type={formik.touched.password && formik.errors.password && 'error'}
            typePwd={
              formik.touched.password && formik.errors.password && 'error'
            }
            helperText={
              formik.touched.password &&
              formik.errors.password &&
              formik.errors.password
            }
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
          />
          <PrimaryButton title='Sign in' type='submit' size='large' />
        </AuthForm>
      </AuthWrapper.Left>
      <AuthWrapper.Right>
        <img src={loginBg} alt='loginBg' />
      </AuthWrapper.Right>
    </AuthWrapper>
  );
};
