import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignIn from '../components/Fragments/FormSignIn'
import FormForgotPassword from '../components/Fragments/FormForgotPassword'

const ForgotPasswordPage = () => {
  return (
    <AuthLayout type="forgot password">
        <FormForgotPassword/>
    </AuthLayout>
  )
}

export default ForgotPasswordPage