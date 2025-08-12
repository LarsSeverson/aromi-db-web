import { gql } from '@/generated'

export const REFRESH_MUTATION = gql(/* GraphQL */ `
  mutation Refresh {
    refresh {
      ...AuthTokenPayloadFragment
    }
  }
`)

export const LOG_IN_MUTATION = gql(/* GraphQL */ `
  mutation LogIn(
    $input: LogInInput!
  ) {
    logIn(input: $input) {
      ...AuthTokenPayloadFragment
    }
  }
`)

export const LOG_OUT_MUTATION = gql(/* GraphQL */ `
  mutation LogOut {
    logOut
  }
`)

export const SIGN_UP_MUTATION = gql(/* GraphQL */ `
  mutation SignUp(
    $input: SignUpInput!
  ) {
    signUp(input: $input) {
      ...AuthDeliveryResultFragment
    }
  }
`)

export const CONFIRM_SIGN_UP_MUTATION = gql(/* GraphQL */ `
  mutation ConfirmSignUp(
    $input: ConfirmSignUpInput!
  ) {
    confirmSignUp(input: $input)
  }
`)

export const RESEND_SIGN_UP_CODE_MUTATION = gql(/* GraphQL */ `
  mutation ResendSignUpCode(
    $input: ResendSignUpCodeInput!
  ) {
    resendSignUpCode(input: $input) {
      ...AuthDeliveryResultFragment
    }
  }
`)

export const FORGOT_PASSWORD_MUTATION = gql(/* GraphQL */ `
  mutation ForgotPassword(
    $input: ForgotPasswordInput!
  ) {
    forgotPassword(input: $input) {
      ...AuthDeliveryResultFragment
    }
  }
`)

export const CONFIRM_FORGOT_PASSWORD_MUTATION = gql(/* GraphQL */ `
  mutation ConfirmForgotPassword(
    $input: ConfirmForgotPasswordInput!
  ) {
    confirmForgotPassword(input: $input) 
  }
`)
