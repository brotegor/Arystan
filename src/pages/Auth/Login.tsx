import { Link} from 'react-router-dom';
import { Formik, Form, Field, FormikErrors } from 'formik';
import s from './styles.module.scss';

interface FormValues {
  username: string;
  password: string;
}

export function Login() {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.username) {
      errors.username = 'Это поле обязательно!';
    }

    if (!values.password) {
      errors.password = 'Это поле обязательно!';
    }

    return errors;
   };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      {({ errors, touched }) => (
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <Field
              className={s.input}
              type="text"
              name="username"
              placeholder="Логин"
            />
            {errors.username && touched.username ? (
              <div className={s.fieldError}>{errors.username}</div>
            ) : null}
          </div>
          <div className={s.fieldWrapper}>
            <Field
              className={s.input}
              type="password" 
              name="password"
              placeholder="Пароль"
            />
            {errors.password && touched.password ? (
              <div className={s.fieldError}>{errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className={s.signIn}>Войти</button>
          <div className={s.separator}></div>
          <Link className={s.link} to='#'>Забыли пароль?</Link>
        </Form>
      )}
    </Formik>
  );
}
