import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignIn from '../components/Fragments/FormSignIn'

const SignInPage = () => {
  return (
    <AuthLayout type="sign in">
        <FormSignIn/>
    </AuthLayout>
  )
}

export default SignInPage