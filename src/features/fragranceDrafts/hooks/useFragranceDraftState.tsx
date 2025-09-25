import { errAsync, type ResultAsync } from 'neverthrow'
import { type IFragranceDraftShell } from '../types'
import { useWithStatus } from '@/hooks/useWithStatus'
import { useResultAsyncQueue } from '@/hooks/useResultAsyncQueue'
import { useCallback, useEffect, useRef } from 'react'

export interface UseFragranceDraftStateProps {
  id: string
  initialVersion: number
  refresh: () => ResultAsync<IFragranceDraftShell, ApolloError>
}

export const useFragranceDraftState = (props: UseFragranceDraftStateProps) => {
  const { id, initialVersion, refresh } = props

  const { status, withStatus, reset } = useWithStatus()
  const { enqueue } = useResultAsyncQueue()

  const internalId = useRef(id)
  const version = useRef(initialVersion)

  const applyVersion = (v: number) => {
    version.current = v
  }

  const refreshVersion = useCallback(() => {
    return refresh()
      .andTee(ds => { applyVersion(ds.version) })
  }, [refresh])

  const update = useCallback((
    op: (prevVersion: number) => ResultAsync<IFragranceDraftShell, ApolloError>
  ) => {
    return enqueue(() =>
      withStatus(() =>
        op(version.current)
          .andTee(ds => { applyVersion(ds.version) })
          .orElse(e => refreshVersion()
            .andThen(() => errAsync(e))
          )
      )
    )
  }, [enqueue, refreshVersion, withStatus])

  useEffect(
    () => {
      if (id !== internalId.current) {
        internalId.current = id
        version.current = initialVersion
        reset()
      }
    },
    [id, initialVersion, reset]
  )

  return { status, update }
}
