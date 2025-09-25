import React, { useState } from 'react'
import AuthDialogHeading from './AuthDialogHeading'
import { Form } from '@base-ui-components/react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import { Link } from '@tanstack/react-router'
import { useAuthContext } from '../contexts/AuthContext'
import { getFieldErrors } from '@/utils/validation'
import { LogInSchema } from '../utils/validation'
import { extractGraphQLError } from '@/utils/error'
import SubmitButton from '@/components/SubmitButton'

export interface InformationLogInStepProps {
  onNotConfirmed: (email: string, password: string) => void
}

const InformationLogInStep = (props: InformationLogInStepProps) => {
  const { onNotConfirmed } = props

  const { logIn } = useAuthContext()

  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const fieldErrors = getFieldErrors(formData, LogInSchema)
    const valid = Object.values(fieldErrors).length === 0

    if (valid) {
      await logIn({ email, password })
        .match(
          () => {
            window.location.reload()
          },
          error => {
            const code = error.graphQLErrors?.[0].extensions?.code

            if (['NOT_CONFIRMED'].includes(code as string)) {
              onNotConfirmed(email, password)
            }

            setError(extractGraphQLError(error))
          }
        )
    }

    setErrors(fieldErrors)
    setIsLoading(false)
  }

  return (
    <div>
      <AuthDialogHeading
        error={error}
      />

      <Form
        errors={errors}
        onClearErrors={setErrors}
        onSubmit={(e) => { void handleSubmit(e) }}
        className='flex flex-col mt-4'
      >
        <EmailInput />

        <PasswordInput />

        <Link
          to='/auth/account-recovery'
          search={{ showLogIn: false }}
          className='text-sm hover:underline mt-1'
          style={{ marginLeft: 'auto' }}
        >
          Forgot password?
        </Link>

        <div
          className='flex flex-col gap-3 mt-5'
        >
          <SubmitButton
            isLoading={isLoading}
            text='Log In'
          />

          <Link
            to='.'
            search={{ showSignUp: true }}
            className='text-center text-sm group w-min text-nowrap self-center'
          >
            Don't have an account?&nbsp;

            <span
              className='font-semibold group-hover:underline'
            >
              Sign Up
            </span>
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default InformationLogInStep
