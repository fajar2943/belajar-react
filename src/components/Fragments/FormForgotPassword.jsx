import React from 'react'
import LabeledInput from "../Elements/LabeledInput"
import CheckBox from "../Elements/CheckBox"
import Button from "../Elements/Button"
import { Link } from 'react-router-dom'

const FormForgotPassword = () => {
  return (
    <form action="/login">
        <div className="mb-6">
            <div className='text-center mb-6'>
                <strong className='mb-5'>Forgot Password?</strong>
                <p>Enter your email address to get the password reset link.</p>
            </div>
            <LabeledInput
                label="Email address"
                type="email"
                placeholder="hello@example.com"
                name="email"
            />
        </div>
        <Button variant="bg-primary w-full text-white" type="submit">Password Reset</Button>
    </form>
  )
}

export default FormForgotPassword