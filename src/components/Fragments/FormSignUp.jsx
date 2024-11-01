import React from 'react'
import LabeledInput from "../Elements/LabeledInput"
import CheckBox from "../Elements/CheckBox"
import Button from "../Elements/Button"

const FormSignUp = () => {
  return (
    <form action="/">
        <div className="mb-6">
            <LabeledInput
                label="Name"
                type="text"
                placeholder="John Doe"
                name="name"
            />
        </div>
        <div className="mb-6">
            <LabeledInput
                label="Email address"
                type="email"
                placeholder="hello@example.com"
                name="email"
            />
        </div>
        <div className="mb-6">
            <LabeledInput
                label="Password"
                type="password"
                placeholder="*************"
                name="password"
            />
        </div>
        <Button variant="bg-primary w-full text-white" type="submit">Sign Up</Button>
    </form>
  )
}

export default FormSignUp