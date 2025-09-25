import { useCallback, useEffect, useRef, useState } from 'react'
import { useRefresh } from './useRefresh'
import { useLogIn } from './useLogIn'
import { accessToken as setClientAcessToken } from '@/utils/client'
import { useLogOut } from './useLogOut'
import { useForgotPassword } from './useForgotPassword'
import { useConfirmForgotPassword } from './useConfirmForgotPassword'
import { useSignUp } from './useSignUp'
import { useConfirmSignUp } from './useConfirmSignUp'
import { useResendSignUpCode } from './useResendSignUpCode'
import { type LogInInput, type AuthTokenPayload } from '@/generated/graphql'
import { useTimer } from '@/hooks/useTimer'
import { okAsync } from 'neverthrow'

const useAuth = () => {
  const payload = useRef<AuthTokenPayload | undefined>(null)
  const { start, clear } = useTimer()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)

  const {
    loading: refreshLoading,
    refresh: refreshInner
  } = useRefresh()

  const {
    loading: logInLoading,
    logIn: logInInner
  } = useLogIn()

  const {
    logOut: logOutInner
  } = useLogOut()

  const {
    signUp
  } = useSignUp()

  const {
    confirmSignUp
  } = useConfirmSignUp()

  const {
    forgotPassword
  } = useForgotPassword()

  const {
    confirmForgotPassword
  } = useConfirmForgotPassword()

  const {
    resendSignUpCode
  } = useResendSignUpCode()

  const getAccessTokenExpiration = () => {
    const data = payload.current
    if (data?.expiresIn == null) return

    const expMs = data.expiresIn * 1000
    const msToRefresh = expMs - Date.now() - 60 * 1000 // 1min before

    return msToRefresh
  }

  const applyNewPayload = (newPayload?: AuthTokenPayload | null) => {
    payload.current = newPayload

    setClientAcessToken(newPayload?.accessToken)
    setIsAuthenticated(newPayload != null)
  }

  const refresh = () => {
    return refreshInner()
      .andTee(payload => {
        applyNewPayload(payload)
        const delay = getAccessTokenExpiration()

        if (delay != null) {
          start(
            () => {
              void refresh()
            },
            delay
          )
        }
      })
  }

  const logIn = (input: LogInInput) => {
    return logInInner(input)
      .andTee(payload => {
        applyNewPayload(payload)
        const delay = getAccessTokenExpiration()

        if (delay != null) {
          start(
            () => {
              void refresh()
            },
            delay
          )
        }
      })
  }

  const logOut = () => {
    return logOutInner()
      .andTee(cleanAuth)
  }

  const initialize = () => {
    if (hasInitialized) {
      return okAsync(payload.current)
    }

    return refresh()
      .andTee(() => {
        setHasInitialized(true)
      })
      .orTee(() => {
        setHasInitialized(true)
      })
  }

  const cleanAuth = useCallback(() => {
    payload.current = null
    setIsAuthenticated(false)
    setClientAcessToken(undefined)
    clear()
  }, [clear])

  useEffect(() => cleanAuth, [cleanAuth])

  return {
    payload,
    isAuthenticated,
    hasInitialized,
    loading: logInLoading || refreshLoading,

    initialize,
    logIn,
    logOut,

    signUp,
    confirmSignUp,
    resendSignUpCode,

    forgotPassword,
    confirmForgotPassword
  }
}

export default useAuth
