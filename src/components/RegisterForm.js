import React from 'react';
import { Formik, Field, Form } from 'formik'
const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
  errorMsg: 'text-red-500 text-sm',
}

export const RegisterForm = () => (
  <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <label className={styles.label} htmlFor='Name'>
          Full Name
        </label>
        <Field className={styles.field} id='name' name='name' />

        <label className={styles.label} htmlFor='Email'>
          Email
        </label>
        <Field className={styles.field} id='email' name='email' />

        <label className={styles.label} htmlFor='Password'>
          Password
        </label>
        <Field className={styles.field} id='Password' name='Password' />
        <div class='mt-8'>
          <button type='submit' className={styles.button}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  </>
)