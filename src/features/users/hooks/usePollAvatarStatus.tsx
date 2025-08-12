import { useLazyQuery } from '@apollo/client'
import { useRef } from 'react'
import { MY_QUERY } from '../graphql/queries'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'
import { type IUserSummary } from '../types'

const INTERVAL = 2000

export const usePollAvatarStatus = () => {
  const [meInner] = useLazyQuery(MY_QUERY, { fetchPolicy: 'network-only' })

  const timer = useRef<ReturnType<typeof setTimeout>>(null)
  const running = useRef(false)

  const pollMe = async (
    onData: (me: IUserSummary | undefined) => void
  ) => {
    await ResultAsync
      .fromPromise(
        meInner(),
        toApolloError
      )
      .andTee(({ data }) => {
        onData(data?.me)
      })
  }

  const start = (
    onData: (me: IUserSummary | undefined) => void
  ) => {
    if (running.current) return
    running.current = true

    const tick = async () => {
      if (!running.current) return
      await pollMe(onData)
      if (!running.current) return

      timer.current = setTimeout(() => {
        void tick()
      }, INTERVAL)
    }

    void tick()
  }

  const stop = () => {
    running.current = false
    if (timer.current == null) return

    clearInterval(timer.current)
    timer.current = null
  }

  return {
    start,
    stop
  }
}
