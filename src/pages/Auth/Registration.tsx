import { Formik, Form, Field, FormikErrors } from 'formik';
import s from './styles.module.scss';

interface FormValues {
  email: string;
  username: string;
  password1: string;
  password2: string;
}

export function Registration() {
  const initialValues: FormValues = {
    email: '',
    username: '',
    password1: '',
    password2: '',
  };

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.email) {
      errors.email = 'Это поле обязательно!';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Неправильный email!';
    }

    if (!values.username) {
      errors.username = 'Это поле обязательно!';
    }

    if (!values.password1) {
      errors.password1 = 'Это поле обязательно!';
    }

    if (!values.password2) {
      errors.password2 = 'Это поле обязательно!';
    }

    if (values.password1 !== values.password2) {
      errors.password2 = 'Пароли не совпадают!';
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
              type="email"
              name="email"
              placeholder="E-mail"
            />
            {errors.email && touched.email ? (
              <div className={s.fieldError}>{errors.email}</div>
            ) : null}
          </div>
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
              name="password1"
              placeholder="Пароль"
            />
            {errors.password1 && touched.password1 ? (
              <div className={s.fieldError}>{errors.password1}</div>
            ) : null}
          </div>
          <div className={s.fieldWrapper}>
            <Field
              className={s.input}
              type="password" 
              name="password2"
              placeholder="Повторите пароль"
            />
            {errors.password2 && touched.password2 ? (
              <div className={s.fieldError}>{errors.password2}</div>
            ) : null}
          </div>
          <button type="submit" className={s.signIn}>Регистрация</button>
        </Form>
      )}
    </Formik>
  );
}
