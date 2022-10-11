import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginSchema } from './validation/loginSchema'
const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
  errorMsg: 'text-red-500 text-sm',
}

export const LoginForm = () => (
  <>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
        console.log("value", values.email, values.password)
      }}
    >
      <Form>
        <label className={styles.label} htmlFor='Email'>
          Email
        </label>
        <Field className={styles.field} id='email' name='email' />
        <ErrorMessage component='a' className={styles.errorMsg} name='email' />
        <label className={styles.label} htmlFor='Email'>
          Password
        </label>
        <Field className={styles.field} id='password' name='password' />
        <ErrorMessage
          component='a'
          className={styles.errorMsg}
          name='password'
        />
        <div className='mt-8'>
          <button type='submit' className={styles.button}>
            Login
          </button>
        </div>
      </Form>
    </Formik>
  </>
)