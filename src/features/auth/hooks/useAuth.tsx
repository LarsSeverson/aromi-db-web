import { useCallback, useEffect, useRef, useState } from 'react'
import { useRefresh } from './useRefresh'
import { useLogIn } from './useLogIn'
import { accessToken as setClientAcessToken } from '@/common/client'
import { useLogOut } from './useLogOut'
import { useForgotPassword } from './useForgotPassword'
import { useConfirmForgotPassword } from './useConfirmForgotPassword'
import { useSignUp } from './useSignUp'
import { useConfirmSignUp } from './useConfirmSignUp'
import { useResendSignUpCode } from './useResendSignUpCode'
import { type AuthTokenPayload } from '@/generated/graphql'

const useAuth = () => {
  const payload = useRef<AuthTokenPayload | undefined>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)

  const {
    loading: refreshLoading,
    refresh
  } = useRefresh()

  const {
    data: logInData,
    loading: logInLoading,
    logIn
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

  const handleTokenExpiration = useCallback(() => {
    const data = payload.current
    if (data?.expiresIn == null) return

    const expMs = data.expiresIn * 1000
    const msToRefresh = expMs - Date.now() - 60 * 1000 // 1min before

    if (timer.current != null) clearTimeout(timer.current)

    timer.current = setTimeout(() => { void refresh() }, msToRefresh)
  }, [refresh])

  const handleNewPayload = useCallback((newPayload: AuthTokenPayload | null | undefined) => {
    payload.current = newPayload

    setClientAcessToken(newPayload?.accessToken)
    setIsAuthenticated(newPayload != null)

    handleTokenExpiration()
  }, [handleTokenExpiration])

  const cleanAuth = useCallback(() => {
    if (timer.current != null) clearTimeout(timer.current)
    payload.current = null
    setIsAuthenticated(false)
    setClientAcessToken(undefined)
  }, [])

  const logOut = useCallback(() => {
    return logOutInner().andTee(cleanAuth)
  }, [logOutInner, cleanAuth])

  useEffect(() => {
    const newPayload = logInData?.logIn
    if (newPayload == null) return

    handleNewPayload(newPayload)
  }, [logInData, handleNewPayload])

  useEffect(() => {
    if (hasInitialized) return

    void refresh()
      .match(
        ({ data }) => {
          handleNewPayload(data?.refresh)
          setHasInitialized(true)
        },
        () => {
          setHasInitialized(true)
        }
      )
  }, [hasInitialized, handleNewPayload, refresh])

  useEffect(() => cleanAuth, [cleanAuth])

  return {
    payload,
    isAuthenticated,
    hasInitialized,
    loading: logInLoading || refreshLoading,

    refresh,
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
