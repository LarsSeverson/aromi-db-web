import { type ApolloError } from '@apollo/client'
import { Toast } from '@base-ui-components/react'

export const useToastMessage = () => {
  const mngr = Toast.useToastManager()

  const toastMessage = (
    title: string,
    message?: string
  ) => {
    mngr.add({
      title,
      description: message,
      timeout: 5000
    })
  }

  const toastApolloError = (
    error: unknown,
    title: string = 'Something went wrong'
  ) => {
    const typed = error as ApolloError
    const message = typed.graphQLErrors?.[0]?.message ?? ''

    mngr.add({
      title,
      description: message,
      timeout: 7000
    })
  }

  return {
    toastMessage,
    toastApolloError
  }
}
